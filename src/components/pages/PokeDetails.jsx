import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonDetail } from '../../features/pokeSlice';
import CardParentDesc from './CardParentDesc';
import PokeCardDetail from './PokeCardDetail';

const PokeDetails = () => {
  const pokeName = useParams().name;
  //console.log("params = ", pokeName)
  let dispatch = useDispatch();
  //const pokeObjState = useSelector((state) => state.pokemonState);
  const { pokeObjectData, pokeObjectStatus, pokeObjectError, pokeErrorMsg } =
    useSelector((state) => state.pokemonState);

  useEffect(() => {
    dispatch(getPokemonDetail(pokeName));
  }, [dispatch, pokeName]);

  return (
    <React.Fragment>
      <div>
        <PokeCardDetail
          name={pokeName}
          status={pokeObjectStatus}
          data={pokeObjectData}
          error={pokeObjectError}
          message={pokeErrorMsg}
        />
      </div>

      <div>
        <CardParentDesc data={pokeObjectData} check={pokeObjectStatus} />
      </div>
    </React.Fragment>
  );
};

export default PokeDetails;
