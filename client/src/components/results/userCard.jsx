import '../../styles/results/userCard.scss';

const UserCard = ({ data }) => {
   return (
      <div className="card">
         <div className="logo-and-name">
            <img
               src={data.avatar_url}
               alt="picture_profile"
               className="picture-profile"
            />
            <h2>{data.login}</h2>
         </div>
         <div className="information">
            <div>ID: {data.id}</div>
            <div>Location:</div>
            <div>Profile: {data.html_url}</div>
            <div>Score: {data.score}</div>
         </div>
      </div>
   );
};

export default UserCard;