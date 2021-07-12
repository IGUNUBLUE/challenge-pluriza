// import axios from 'axios';
// import { useEffect, useState } from 'react';

import '../../styles/results/userCard.scss';

const UserCard = ({ data }) => {
   // const [followers, setfollowers] = useState(0);
   // const [following, setfollowing] = useState(0);

   // useEffect(() => {
   //    async function getFoll(){
   //       let followers = await axios.get(`${decodeURI(data.followers_url)}`);
   //       let following = await axios.get(`${decodeURI(data.following_url)}`);
   //       setfollowers(followers.data.length);
   //       setfollowing(following.data.length);
   //       console.log(followers);
   //    }
   //    getFoll();
   // }, [data.followers_url, data.following_url]);

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
            <div name="ID">🆔: {data.id}</div>
            <div name="location">📍: Unknown</div>
            <div name="link_profile">
               🔗: <a href={data.html_url}>{data.html_url}</a>
            </div>
            <div>
               <span name="followers">⬅️:0</span> -- 
               <span name="following">➡️:0</span>
            </div>
         </div>
      </div>
   );
};

export default UserCard;
