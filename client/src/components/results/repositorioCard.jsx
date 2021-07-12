import '../../styles/results/repositorioCard.scss';

const RepositorioCard = ({ data }) => {
   return (
      <div className="repo-card">
         <div className="repo-name">{data.full_name}</div>
         <div className="repo-information">
            <div name="id">🆔: {data.id}</div>
            <div name="profile_link">
               🔗: <a href={data.owner.html_url}>look at the repository</a>
            </div>
            <div name="starts">✨: {data.stargazers_count}</div>
            <div name="language">👅: {data.language}</div>
            <div name="forks">🍴: {data.forks_count}</div>
            <div name="description">
               📝: <span className="repo-description">{data.description}</span>
            </div>
         </div>
      </div>
   );
};

export default RepositorioCard;
