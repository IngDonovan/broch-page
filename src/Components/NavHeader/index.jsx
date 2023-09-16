import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EdnaContext } from "../../Context";

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
              Edna Gongora
            </NavLink>
          </span>
        </div>
        <div>
          <ul>
            <li className="">
                Contact
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavHeader;
