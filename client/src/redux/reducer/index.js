import {
   CLEAN_STATE,
   CLEAR_CACHE,
   GET_RESULTS,
   SET_SEARCH_CRITERIA,
} from '../actions/types';

const initialState = {
   response: undefined,
   messages: undefined,
   searchCriteria: { text: '', type: 'users' },
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

      case CLEAN_STATE:
         return {
            ...state,
            response: action.payload,
         };

      case SET_SEARCH_CRITERIA:
         return {
            ...state,
            searchCriteria: action.payload,
         };

      default:
         return state;
   }
}

export default reducer;
