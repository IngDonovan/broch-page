import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EdnaContext } from "../../Context";
import { TiThMenuOutline } from "react-icons/ti"

import "./NavHeader.scss";

const NavHeader = () => {


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
            <li className="cont-menu">
              <TiThMenuOutline className="menuIco" 
                // onClick={toggleMenuMb}
                />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavHeader;
