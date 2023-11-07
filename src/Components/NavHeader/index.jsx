import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EdnaContext } from "../../Context";
import { TiThMenuOutline } from "react-icons/ti"

import "./NavHeader.scss";

const NavHeader = () => {

  const {
    isMenuMbOpen,
    toggleMenuMb,
  } = useContext(EdnaContext);

  return (
    <header>
      <nav>
        <div>
          <span>
            <NavLink
              to="/"
              className="logo"
            >
              <b>Edna</b> Gongora
            </NavLink>
          </span>
        </div>
        <div>
          <ul>
            <li className="cont-menu"
                onClick={toggleMenuMb}>
              <TiThMenuOutline className="menuIco" 
                />
            </li>
          </ul>
        </div>
        <div className="navTablet">
          <ul>
            <li>
              <a href="#contactMe">
                Contáctame
              </a>
            </li>
            <li>
              <a href="#aboutMe">
                Sobre mi
              </a>
            </li>
            <li>
              <a href="/dloil">
                D'loil SAS
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={isMenuMbOpen ? "menu-bar" : "hidden"}>
        <ul className="menu-bar-list">
          <li>
            <a href="#contactMe">
              Contáctame
            </a>
          </li>
          <li>
            <a href="#aboutMe">
              Sobre mi
            </a>
          </li>
          <li>
            <a href="/dloil">
              D'loil SAS
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavHeader;
