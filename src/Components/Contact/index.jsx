import { useContext } from "react";
import { EdnaContext } from "../../Context";
import "./Contact.scss";

const Contact = () => {
  const {
    listContact,
    listSkills,
  } = useContext(EdnaContext);

  const viewContact = () => {
    return (
      listContact.map(data => (
        <li key={data.id}>
          <span>
            ico
          </span>
          <p>{data.text}</p>
        </li>
      ))
    )
  }

  const viewServices = () => {
    return (
      listSkills.map(data => (
        <li key={data.id}>
          {data.text}
        </li>
      ))
    )
  }


  return (
    <section className="contactContainer">
        <div>
          <h2>Contacto</h2> 
          <span>
              <ul>
                {viewContact()}
              </ul>
          </span>
        </div>
        <div>
          <h2>Sobre mi</h2>
          <ul>
            {viewServices()}
          </ul> 
        </div>
    </section>
  );
};

export default Contact;