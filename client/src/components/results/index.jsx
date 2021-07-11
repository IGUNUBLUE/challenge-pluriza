import { useSelector } from 'react-redux';

import UserCard from './userCard';
import RepositorioCard from './repositorioCard';

const Results = () => {
   const result = useSelector((state) => state.response?.result);

   if (result) {
      if (result.type === 'users') {
         return result.github_results.items.map((item, i) => (
            <UserCard key={i} data={item} />
         ));
      } else {
         return <RepositorioCard />;
      }
   } else {
      return <div></div>;
   }
};

export default Results;
