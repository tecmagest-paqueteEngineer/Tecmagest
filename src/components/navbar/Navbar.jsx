import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Página Inicial</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Séries</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Filmes</span>
          </Link>
          <span>Novos e Populares</span>
          <span>Minha Lista</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Infantis</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Configurações</span>
              <span onClick={() => dispatch(logout())}>Sair</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;