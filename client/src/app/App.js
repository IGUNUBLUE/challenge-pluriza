import { useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Results from '../components/results';
import Search from '../components/search';

import '../styles/App.scss';

function App() {
   const result = useSelector((state) => state.response?.result);

   return (
      <BrowserRouter>
         <div
            className={
               result?.github_results.total_count > 0
                  ? 'App_with_results'
                  : 'App_without_results'
            }
         >
            <div className={result ? 'search-with-result' : 'search'}>
               <Route exact path="/" component={Search} />
            </div>
            <div className="detail-results">
               {result
                  ? `${result.github_results.total_count} matches found for type "${result.type}" and search criteria "${result.text}"`
                  : ''}
            </div>
            <div className="results">
               <Route exact path="/" component={Results} />
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
