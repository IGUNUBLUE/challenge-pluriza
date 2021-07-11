import axios from 'axios';

import {
   GET_RESULTS,
   CLEAR_CACHE,
   CLEAN_STATE,
   SET_SEARCH_CRITERIA,
} from './types';

const API_URL = process.env.REACT_APP_BACK_URL || 'http://localhost:3001';

export const getResults = ({ text, type }) => {
   return async (dispatch) => {
      const { data } = await axios.post(`${API_URL}/search`, {
         typeOfSearch: type,
         textToSearch: text,
      });
      dispatch({ type: GET_RESULTS, payload: data });
   };
};

export const clearCache = () => {
   return async (dispatch) => {
      const resp = await axios.get(`${API_URL}/clear-cache`);
      const json = await resp.json();
      dispatch({ type: CLEAR_CACHE, payload: json });
   };
};

export const cleanState = () => {
   return async (dispatch) => {
      dispatch({ type: CLEAN_STATE, payload: undefined });
   };
};

export const setSearchCriteria = (value) => {
   return async (dispatch) => {
      dispatch({ type: SET_SEARCH_CRITERIA, payload: value });
   };
};
