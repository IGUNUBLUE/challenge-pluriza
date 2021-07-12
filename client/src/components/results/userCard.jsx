/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';

import '../../styles/results/userCard.scss';

const UserCard = ({ data }) => {
   const [followers, setfollowers] = useState();
   const [following, setfollowing] = useState();

   useEffect(() => {
      async function getFoll(){
         let followers = await axios.get(`${decodeURI(data.followers_url)}`);
         let following = await axios.get(`${decodeURI(data.following_url)}`);
         setfollowers(followers.data.length);
         setfollowing(following.data.length);
      }
      getFoll();
   }, []);

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
               🔗: <a href="data.html_url">{data.html_url}</a>
            </div>
            <div>
               <span name="followers">⬅️:{ followers }</span>
               <span name="following">➡️:{ following }</span>
            </div>
         </div>
      </div>
   );
};

export default UserCard;
