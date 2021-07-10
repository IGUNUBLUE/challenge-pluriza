import { CLEAR_CACHE, GET_RESULTS } from '../actions/types';

const initialState = {
   response: {},
   messages: {}
};

function reducer(state = initialState, action) {
   switch (action.type) {
      case GET_RESULTS:
         return {
            ...state,
            response: action.payload,
         };
      
      case CLEAR_CACHE:
         return {
            ...state,
            messages: action.payload,
         };

      default:
         return state;
   }
}

export default reducer;
