import { createContext, useState, useEffect } from "react";

const EdnaContext = createContext();

const EdnaProvider = ({ children }) => {
  //Get Products
//   const [items, setItems] = useState(null);
  const listServices = [
    {
      id: 1,
      text:'Implementación de Sistemas de Gestión',
      url:'https://s3-alpha-sig.figma.com/img/bfc2/f4b7/72a48e19f9ed9ea46873e23e685fafbf?Expires=1696204800&Signature=hsV2OtAJmb0KYUZd7AIN-DzllYQbu8DLeKgZE8aBsjUkGDFjX1OL56H-2FfOyXEbkaCTeoVblifoLgyyZyjKcTYnKXpEUealKoxqQubvQA3l2pwIPjvyfvCuQarruU4u8jFKXJdfoBjGOgLt7zrLZ7o2C6u1kgR~wQQZMyU5RYUx~VM~T~n8JP7R2u~wQRV0xPoiVukw7jig5qJn8y7qOHDYbvrrdjs8xAMRxynHoL6LyYYHv3OjoOCiq~3p97vhtRbpURUPCQPRQ~qUFNgiYkQornCHEoI28ShccGVMTcLhjzHjA-pU7dn1DtkstZSNE-bEtAgu3xoYp~sS7UtiUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 2,
      text:'Auditorias Internas y Diagnósticos',
      url:'https://s3-alpha-sig.figma.com/img/8fd5/0908/eeed7a92b5934824ec8ea533ebcc68a3?Expires=1696204800&Signature=KEfCs9y-Rv0mEqcgiXb6ojOZqs4fgt4Wo0OMF7KCVGWRrcT16mJizIYe03ra~XIqtpVfM~F1zHG4le0wrV1kRJMc7VnaanvC9aV8AFIp6ogF~98rH4H-5QmLvFeluy4fdxGlLWiaOXlDlfClkMQ3b-OTvaeOjCrM1nZmR8O0lIgnguWdk~C3qYGHTGe26ex3-e2dzjdaYwbvpS1U-pwp4SOeQsbuJfS9r8BfAeWHpNt6lv0dU~KCFdgUEVKRFwfW5TzIKEssdb5OOn1yQF1RFyFlN97fcp6eAEeaMBuZItAoyL5PaWq98RM7MJHVBltL--ienX~3ZTqyDEpWI-0Dpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 3,
      text:'Aseguramiento Documental',
      url:'https://s3-alpha-sig.figma.com/img/9704/4ed7/ea7838bf084b27e95b9f540c1ed49801?Expires=1696204800&Signature=HApzipg7pVowsVshoUJlYQflDqM-wLB6ITF6jYvglkp-~3Z9y~0IYG6aa-wZRIuZFlsQLJbcaa94F4nTVZ251NMfdIqXhdWNpvg-gsWnAgbY7P6q0Us11EpVLU5haq-vXUQWgOAZxISbuWdJOgsLQoziV--ysacYVHyCgRvSuzegEL9LnuhDX~ke-G8MMjknkasz3-dPzCAZ5aRG56UMp7QCjSU8FRjkoGGOowiS0R4znXK6r9upiHOg54JqNqSPSGYT1qGza3QSt1k5ZuceZzaSbdLrblK09mjXoxB~YOSty6821rQmpOkGQbolbGjMkLGsdoK9VyLkWEz7gVu5TQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 4,
      text:'Capacitaciones y Otras Actividades',
      url:'https://s3-alpha-sig.figma.com/img/7afd/0c31/0280a609e647d4044696a3634b19091e?Expires=1696204800&Signature=JCOBTmM-AdybPJP5S1Cu8EcTizjUIRtkc0TEx5TPiBHTvSlg7T7T5cw8H~XCr0zOlZ-qCWfyp7s56zqWA2QAYvsJkelmY49-Kx6BGii~f~Rk8wrqq7DkGa0EWdOJJSnxcy7fv4cfkXTkuXQSDqriYXIEFkiYOY4m4eAj6OEF0UU5hHuQ0mW6ngt1avM2chHOqHoMuE~eeHSRPnN3ziay6Ua5aBZX25FI6eda3Cd9D5QJr2Tud2OMjzSy2Scvx6KmVOtEPrGxB7baY50Lh7yHvoBTrH8gmrnmUvnZczzwvO5Df4vagKKiiZqmx4BzQQKpOpWeVXLGYneIfNiWa3VhDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      id: 5,
      text:'Otros',
      url:'https://s3-alpha-sig.figma.com/img/bfc2/f4b7/72a48e19f9ed9ea46873e23e685fafbf?Expires=1696204800&Signature=hsV2OtAJmb0KYUZd7AIN-DzllYQbu8DLeKgZE8aBsjUkGDFjX1OL56H-2FfOyXEbkaCTeoVblifoLgyyZyjKcTYnKXpEUealKoxqQubvQA3l2pwIPjvyfvCuQarruU4u8jFKXJdfoBjGOgLt7zrLZ7o2C6u1kgR~wQQZMyU5RYUx~VM~T~n8JP7R2u~wQRV0xPoiVukw7jig5qJn8y7qOHDYbvrrdjs8xAMRxynHoL6LyYYHv3OjoOCiq~3p97vhtRbpURUPCQPRQ~qUFNgiYkQornCHEoI28ShccGVMTcLhjzHjA-pU7dn1DtkstZSNE-bEtAgu3xoYp~sS7UtiUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];

  const listContact = [ 
    {
      id:1,
      text: "Edna Yamile Gongora",
      ico: "",
    },
    {
      id:2,
      text: "ednagoga75@hotmail.com",
      ico: "",
    },
    {
      id:3,
      text: "+57 310 874 8061",
      ico: "",
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
        listServices,
      }}
    >
      {children}
    </EdnaContext.Provider>
  );
};

export { EdnaContext, EdnaProvider };
