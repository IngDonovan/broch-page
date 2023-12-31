import { useContext } from "react";
import { EdnaContext } from "../../Context";
import { IoMdContact } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Contact.scss";

const Contact = () => {
  const {
    listContact,
    listSkills,
  } = useContext(EdnaContext);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "IoMdContact":
        return <IoMdContact className="contactIco"/>;
      case "GrMail":
        return <GrMail className="contactIco"/>;
      case "IoLogoWhatsapp":
        return <IoLogoWhatsapp className="contactIco"/>;
      default:
        return null;
    }
  };

  const viewContact = () => {
    return (
      listContact.map(data => (
        <li key={data.id} className="">
          <span className="viewContIco">
            {getIconComponent(data.ico)}
          </span>
          <p>{data.text}</p>
        </li>
      ))
    )
  }

  const viewSkills = () => {
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
        <div className="contactPlace" id="contactMe">
          <h2>Contacto</h2> 
          <span>
              <ul>
                {viewContact()}
              </ul>
          </span>
        </div>
        <div className="contactService" id="aboutMe">
          <span>
            <h2>Sobre mi</h2>
            <ul>
              {viewSkills()}
            </ul> 
            <button>Descargar CV</button>
          </span>
        </div>
    </section>
  );
};

export default Contact;