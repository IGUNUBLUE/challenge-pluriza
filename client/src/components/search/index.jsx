import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getResults, cleanState, setSearchCriteria } from '../../redux/actions';

import TitleAndLogo from './titleAndLogo';
import '../../styles/search/search.scss';

const Search = () => {
   const dispatch = useDispatch();
   const searchCriteria = useSelector((state) => state.searchCriteria);
   const history = useHistory();

   const handleInputChange = (event) => {
      let value = event.target.value;
      let name = event.target.name;
      dispatch(
         setSearchCriteria({
            ...searchCriteria,
            [name]: value,
         })
      );
   };

   useEffect(() => {
      if (searchCriteria.text.length >= 3) {
         dispatch(getResults(searchCriteria));
         history.push('/results');
      } else {
         dispatch(cleanState());
         history.push('/');
      }
   }, [dispatch, history, searchCriteria]);

   return (
      <div className="search-container">
         <TitleAndLogo />
         <input
            name="text"
            type="text"
            placeholder="Start typing to search..."
            className="input-criteria"
            autoFocus
            onChange={(e) => handleInputChange(e)}
            defaultValue={searchCriteria.text}
         />
         <select
            name="type"
            className="select-types"
            onChange={(e) => handleInputChange(e)}
         >
            <option value="users">Users</option>
            <option value="repositories">Repositories</option>
         </select>
      </div>
   );
};

export default Search;
