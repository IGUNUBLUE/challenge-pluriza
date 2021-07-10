import axios from 'axios';

import { GET_RESULTS, CLEAR_CACHE } from './types';

export const getResults = (searchCriteria) => {
   return async (dispatch) => {
      const resp = await axios.post(
         `${process.env.REACT_APP_BACK_URL}/search`,
         searchCriteria
      );
      const json = await resp.json();
      dispatch({ type: GET_RESULTS, payload: json });
   };
};

export const clearCache = () => {
   return async (dispatch) => {
      const resp = await axios.get(
         `${process.env.REACT_APP_BACK_URL}/clear-cache`
      );
      const json = await resp.json();
      dispatch({ type: CLEAR_CACHE, payload: json });
   };
};
