import { BrowserRouter, Route } from 'react-router-dom';

import Results from '../components/results';
import Search from '../components/search';

import '../styles/App.scss';

function App() {

   return (
      <div className="App">
         <BrowserRouter>
            <Route exact path="/" component={Search} />
            <Route exact path="/results" component={Results} />
         </BrowserRouter>
      </div>
   );
}

export default App;
