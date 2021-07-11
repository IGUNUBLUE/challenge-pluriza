import '../../styles/results/repositorioCard.scss';

const RepositorioCard = ({ data }) => {
   return (
      <div className="card">
         <h2>{data.full_name}</h2>
         <div className="repo-information">
            <div>ID: {data.id}</div>
            <div>URL: {data.owner.html_url}</div>
            <div>Score: {data.score}</div>
            <div>Description: {data.description}</div>
         </div>
      </div>
   );
};

export default RepositorioCard;
