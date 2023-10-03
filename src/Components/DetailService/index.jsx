import { useContext } from "react";
import { EdnaContext } from "../../Context";
import "./DetailService.scss";

const DetailService = () => {
  const { listServices } = useContext(EdnaContext);

  const viewDetailServices = () => {
    return listServices.map((data) => 
        <span key={data.id} className="detailService">
            <h2>{data.title}</h2>
            <ul>
              {data.detail ? (
                data.detail.map((detailItem, index) => (
                  <li key={index}>{detailItem}</li>
                ))
              ) : (
                <li>No hay detalles disponibles</li>
              )}
            </ul>
        </span>
        );
  };
  return (
    <section className="detailServiceContainer">
      {viewDetailServices()}
    </section>
  );
};

export default DetailService;
