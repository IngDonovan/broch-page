import { BrowserRouter, useRoutes } from 'react-router-dom';
import NavHeader from '../Components/NavHeader';
import Home from '../Pages/Home';
import InfoFooter from '../Components/infoFooter';

const AppRoutes = () => {
  let routes = useRoutes ([
    {path: '/', element: <Home />},
    {path: '/broch-page', element: <Home />},
  ]);
  return routes;
}

function AppUI() {

  return (
    <>
      <BrowserRouter>
        <NavHeader />
        <AppRoutes />
        <InfoFooter />
      </BrowserRouter>
    </>
  )
}

export default AppUI;