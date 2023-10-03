import { createContext, useState, useEffect } from "react";

const EdnaContext = createContext();

const EdnaProvider = ({ children }) => {
  
  //Get Products
//   const [items, setItems] = useState(null);
  const listServices = [
    {
      id: 1,
      title:'Implementación de Sistemas de Gestión',
      url:'https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      detail:[
        "BAJO NORMAS:",
        "SG- SST (Dec. 1072/2015. Libro 2, Parte 2 ,Titulo 4, capitulo 6. / Res 0312/2019).",
        "Normas ISO 9001:2015, 14001:2015, 45001:2018, ISO 39001:2012.",
        "Proceso de acreditación ante la ONAC, ISO 17020:2012 rev.2020.",
        "NORSOK S-WA-006:2020 Evaluación de contratistas",
        "RUC, Registro único de contratista ante el CCS (Consejo Colombiano de seguridad).",
        "Resolución 5018, 2019 (SST- Sector eléctrico).",
        "Res 20223040040595 de 2022 PESV.",
      ],
    },
    {
      id: 2,
      title:'Auditorias Internas y Diagnósticos',
      url:'https://images.pexels.com/photos/8190804/pexels-photo-8190804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      detail:[
        "BAJO NORMAS:",
        "SG- SST (Dec. 1072/2015. Libro 2, Parte 2, Titulo 4, capitulo 6. / Res 0312/2019).",
        "Normas ISO 9001:2015, 14001:2015, 45001:2018, ISO 39001:2012.",
        "Proceso de acreditación ante la ONAC, ISO 17020:2012 rev.2020.",
        "NORSOK S-WA-006:2020 Evaluación de contratistas",
        "RUC, Registro único de contratista ante el CCS (Consejo Colombiano de seguridad).",
        "Resolución 5018, 2019 (SST- Sector eléctrico).",
        "Res 20223040040595 de 2022 PESV.",
        "DIAGNÓSTICO 17020:2012 rev.2020.",
      ],
    },
    {
      id: 3,
      title:'Aseguramiento Documental',
      url:'https://images.pexels.com/photos/8297445/pexels-photo-8297445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      detail:[
        "Elaboración del PESV.",
        "Elaboración de procedimientos internos",
        "Establecimiento de comités: Copasst, Convivencia Laboral, comité de seguridad vial.",
        "Entre otros.",
      ],
    },
    {
      id: 4,
      title:'Capacitaciones y Otras Actividades',
      url:'https://images.pexels.com/photos/7648468/pexels-photo-7648468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      detail:[
        "Capacitaciones relacionadas con : SST, Calidad, Ambiental y otras normas.",
        "Autoevaluación del sistema bajo SST. (Res. 0312/2019).",
        "Re-ingeniería de procesos.",
        "Acompañamiento en implementación de procesos.",
        "Diseño e implementación de programa",
        "Y otras actividades."
      ],
    },
    {
      id: 5,
      title:'Otros',
      url:'https://images.pexels.com/photos/7438102/pexels-photo-7438102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const listContact = [ 
    {
      id:1,
      text: "Edna Yamile Gongora",
      ico: "IoMdContact",
    },
    {
      id:2,
      text: "ednagoga75@hotmail.com",
      ico: "GrMail",
    },
    {
      id:3,
      text: "+57 310 874 8061",
      ico: "IoLogoWhatsapp",
    }
  ];

  const listSkills = [ 
    {
      id:1,
      text:"Ing. de petróleos, con mas de 20 años de experiencia en Sistemas de Gestión.",
    },
    {
      id:2,
      text:"Especialista en gerencia de la salud ocupacional.",
    },
    {
      id:3,
      text:"Especialista en ingeniería ambiental.",
    },
    {
      id:4,
      text:"Master en Coaching en dirección empresarial.",
    },
    {
      id:5,
      text:"Auditor líder e interno en ISO 9001:2015, ISO 14001:2015 y 45001:2018.",
    },
    {
      id:6,
      text:"Auditor interno Norsok S-WA-006:2020",
    },
    {
      id:7,
      text:"Auditor interno ISO 39001:2012",
    },
    {
      id:8,
      text:"Auditor interno RUC Vs vigente.",
    },
    {
      id:9,
      text:"Auditor interno ISO 17024, Evaluación de la conformidad. requisitos generales para los organismos que realizan certificación de personas",
    },
  ];


  return (
    <EdnaContext.Provider
      value={{
        listServices,
        listContact,
        listSkills,
      }}
    >
      {children}
    </EdnaContext.Provider>
  );
};

export { EdnaContext, EdnaProvider };
