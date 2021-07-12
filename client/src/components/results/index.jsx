import { useSelector } from 'react-redux';

import UserCard from './userCard';
import RepositorioCard from './repositorioCard';
import Search from '../search';

import loadingAnimation from '../../assets/loading.gif';
import '../../styles/results/results.scss';

const Results = () => {
   const result = useSelector((state) => state.response?.result);
   let stateResults = null;

   if (result) {
      const {
         type,
         github_results: { total_count, items },
      } = result;

      if (type === 'users' && total_count !== 0) {
         stateResults = items.map((item, i) => (
            <UserCard key={i} data={item} />
         ));
      } else if (type === 'repositories' && total_count !== 0) {
         stateResults = items.map((item, i) => (
            <RepositorioCard key={i} data={item} />
         ));
      } else {
         stateResults = <h1>No results found</h1>;
      }
   } else {
      stateResults = <img src={loadingAnimation} alt="loading-animation" />;
   }

   return (
      <div className="results-container">
         <div className="search-results-container">
            <Search />
         </div>
         <div className="cards-results-container">{stateResults}</div>
      </div>
   );
};

export default Results;
