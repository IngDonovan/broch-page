import { useContext } from "react";
import { EdnaContext } from "../../Context";
import "./DetailService.scss";

const DetailService = () => {
  const { listServices } = useContext(EdnaContext);

  const viewDetailServices = () => {
    return listServices.map((data) => 
        <span key={data.id}>
            <h2>{data.text}</h2>
            <ul>
                <li>lista</li>
            </ul>
        </span>
        );
  };
  return (
    <section>

    </section>
  );
};

export default DetailService;
