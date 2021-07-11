import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { getResults, cleanState } from '../../redux/actions';

import TitleAndLogo from './titleAndLogo';
import '../../styles/search/search.scss';

const Search = () => {
   const dispatch = useDispatch();
   const [inputs, setInputs] = useState({ text: '', type: 'users' });

   const handleInputChange = (event) => {
      let value = event.target.value;
      let name = event.target.name;
      setInputs({
         ...inputs,
         [name]: value,
      });
   };

   useEffect(() => {
      if (inputs.text.length >= 3 ) {
         dispatch(getResults(inputs));
      } else {
         dispatch(cleanState())
      }
   },[dispatch, inputs]);

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
            defaultValue={inputs.text}
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
