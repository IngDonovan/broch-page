
import "./Card.scss";

const Card = ({data}) => {


  return (
    <article className="cardContainer">
        <picture>
            <img src={data.url} alt={data.title} />
        </picture>
        <span>
            <p>{data.title}</p>
            
        </span>
    </article>
  );
};

export default Card;
