
import "./Card.scss";

const Card = ({data}) => {


  return (
    <a className="cardContainer" href={`#service${data.id}`}>
        <picture>
            <img src={data.url} alt={data.title} />
        </picture>
        <span>
            <p>{data.title}</p>
        </span>
    </a>
  );
};

export default Card;
