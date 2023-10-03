import dloilogo from '/logoDloil.svg'
// import { TiThMenuOutline } from "react-icons/ti"

import "./InfoFooter.scss";

const InfoFooter = () => {


  return (
    <footer>
        <ul>
            <li>
              <span>
                <img src={dloilogo} className="dloiLogo" alt="Dloil logo" />
              </span>
            </li>
            <li>D'loil SAS</li>
            <li>Sobre Nosotros</li>
            <li>Contacto</li>
        </ul>
        <span className="designContainer">
            <p>Design by</p>
            <span>Ing DRM</span>
        </span>
    </footer>
  );
};

export default InfoFooter;
