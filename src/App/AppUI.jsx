import { BrowserRouter, useRoutes } from 'react-router-dom';
import NavHeader from '../Components/NavHeader';
import Home from '../Pages/Home';

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
      </BrowserRouter>
    </>
  )
}

export default AppUI;