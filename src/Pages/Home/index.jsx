import Portfolio from "../../Components/PortFolio";
import Contact from "../../Components/Contact";
import DetailService from "../../Components/DetailService";
import Divid from "../../Components/Divid";

function Home() {

  return (
    <>
      <main>
        <Portfolio />
        <Contact />
        <Divid />
        <DetailService />
        <Divid />
      </main>
    </>
  )
}

export default Home;