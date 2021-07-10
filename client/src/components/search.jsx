import '../styles/search.scss';
import logo from '../assets/logo_github.svg';

const Search = () => {
   return (
      <div className="search-container">
         <div className="logoAndText-container">
            <img src={logo} alt="logo" className="logo-container" />
            <div className="titleAndDescription-container">
               <span className="search-title">GitHub Searcher</span>
               <br />
               <span className="search-description">
                  Search Users or repositories below
               </span>
            </div>
         </div>
         <input
            type="text"
            placeholder="Start typing to search..."
            className="input-criteria"
            autoFocus
         />
         <select className="select-types">
            <option>Users</option>
            <option>Repositories</option>
         </select>
      </div>
   );
};

export default Search;
