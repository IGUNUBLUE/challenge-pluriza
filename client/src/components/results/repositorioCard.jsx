import '../../styles/results/repositorioCard.scss';

const RepositorioCard = ({ data }) => {
   return (
      <div className="repo-card">
         <div className="repo-name">{data.full_name}</div>
         <div className="repo-information">
            <div>ID: {data.id}</div>
            <div>URL: {data.owner.html_url}</div>
            <div>Score: {data.score}</div>
            <div>
               Description: <span className="repo-description">{data.description}</span>
            </div>
         </div>
      </div>
   );
};

export default RepositorioCard;
