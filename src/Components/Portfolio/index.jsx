// import { TiThMenuOutline } from "react-icons/ti"
import { useContext } from "react";
import Card from "../Card";
import { EdnaContext } from "../../Context";
import photoBase from '/fotoEjemplo.png';
import "./Portfolio.scss";

const Portfolio = () => {
    const { 
        listServices,
      } = useContext(EdnaContext);

      const renderView = () => {
        return (
            listServices.map((service) => 
                <Card key={service.id} data={service} />)
        );
        
      };

  return (
    <section>
        <article>
            <div>
                <p>Hola, yo soy</p>
                <h1>Ingeniera de petroleos & Auditora de Gestión</h1>
            </div>
            <picture>
                <img src={photoBase} alt="" />
            </picture>
        </article>
        <aside>
            <h2>Servicios</h2>
            <div className="cardScroll">
                {renderView()}
            </div>

        </aside>
    </section>
  );
};

export default Portfolio;