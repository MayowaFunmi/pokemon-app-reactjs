import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';
const initialState = {
  pokeResults: [],
  count: 0,
  next: '',
  previous: '',
  getPokeStatus: '',
  getPokeError: '',
  pokeObjectData: {},
  pokeObjectStatus: '',
  pokeObjectError: '',
  pokeErrorMsg: '',
};
/*
export const getPokemons = createAsyncThunk(
  'pokes/getPokemons',
  async (poke, { rejectWithValue }) => {
    try {
      const response = await axios.get(poke);
      //console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
*/

export const getPokemonName = createAsyncThunk(
  'pokes/getPokemonName',
  async (pokemonUrl, { rejectWithValue }) => {
    try {
      const response = await axios.get(pokemonUrl);
      //console.log("res = ", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getPokemonDetail = createAsyncThunk(
  'pokes/getPokemonDetail',
  async (pokemonName, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/${pokemonName}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const pokeSlice = createSlice({
  name: 'pokes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonName.pending, (state, action) => {
      return { ...state, getPokeStatus: 'pending' };
    });
    builder.addCase(getPokemonName.fulfilled, (state, action) => {
      if (action.payload) {
        const data = action.payload;
        //console.log('data = ', data.count);
        return {
          ...state,
          pokeResults: data.results,
          count: data.count,
          next: data.next,
          previous: data.previous,
          getPokeStatus: 'success',
        };
      }
    });
    builder.addCase(getPokemonName.rejected, (state, action) => {
      return {
        ...state,
        getPokeStatus: 'rejected',
        getPokeError: action.payload,
      };
    });

    builder.addCase(getPokemonDetail.pending, (state, action) => {
      return { ...state, pokeObjectStatus: 'pending' };
    });

    builder.addCase(getPokemonDetail.fulfilled, (state, action) => {
      if (action.payload) {
        const data = action.payload;
        return {
          ...state,
          pokeObjectData: data,
          pokeObjectStatus: 'success',
        };
      }
    });

    builder.addCase(getPokemonDetail.rejected, (state, action) => {
      return {
        ...state,
        pokeObjectError: 'rejected',
        pokeErrorMsg: action.payload,
      };
    });
  },
});

export default pokeSlice.reducer;
