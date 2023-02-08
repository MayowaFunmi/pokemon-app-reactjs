import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonName } from '../../features/pokeSlice';
import axios from 'axios';
import Card from './Card';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';
import SearchAppBar from './SearchAppBar';

const PokeApp = () => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemonState);
  const { pokeResults, next, previous, getPokeStatus } = useSelector(
    (state) => state.pokemonState
  );

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [pokeData, setPokeData] = useState([]);

  const getEachPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  const handlePrevious = () => {
    //setPokeData([]);
    setUrl(previous);
  };

  const handleNext = () => {
    //setPokeData([]);
    setUrl(next);
  };

  useEffect(() => {
    dispatch(getPokemonName(url));
  }, [dispatch, url]);

  useEffect(() => {
    getEachPokemon(pokeResults);
  }, [pokeResults]);

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header centered">
          <h5>The PokeDex App</h5>
        </div>

        <div>
          <SearchAppBar />
        </div>

        <div>
          {pokemonState.getPokeStatus === 'rejected' ? <h3>rejected</h3> : null}
        </div>

        <div className="card-body">
          {pokemonState.getPokeStatus === 'pending' ? (
            <h3>Loading ... Please wait</h3>
          ) : null}

          {getPokeStatus === 'success' ? (
            <div className="pokeContainer">
              <Card pokemon={pokeData} />
            </div>
          ) : null}
        </div>
      </div>
      <Stack direction="row" spacing={10}>
        {previous === null ? null : (
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={handlePrevious}
          >
            Previous
          </Button>
        )}

        {next === null ? null : (
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={handleNext}
          >
            Next
          </Button>
        )}
      </Stack>
    </React.Fragment>
  );
};

export default PokeApp;
