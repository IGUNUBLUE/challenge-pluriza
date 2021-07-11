import logo from '../../assets/logo_github.svg';
import '../../styles/search/titleAndLogo.scss';

const TitleAndLogo = () => {
   return (
      <div className="logoAndText-container">
         <img src={logo} alt="logo" className="logo-container" />
         <div className="titleAndDescription-container">
            <span className="search-title">GitHub Searcher</span>
            <br />
            <span className="search-description">
               Search Users or repositories below
            </span>
         </div>
      </div>
   );
};

export default TitleAndLogo;