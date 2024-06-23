import { Routes, Route, } from 'react-router-dom';
import { AddressesRoute } from '../../const';
import Layout from '../layout/layout';
import MainPage from '../main-page/main-page';
import AutorizationPage from '../autorization-page/autorization-page';
import LogInPage from '../login-page/login-page';
import Page404 from '../page-404/page-404';
import HistoryRouter from '../history-route/historry-route';
import browserHistory from '../../browser-history';
import PrivateRouteLoginSignup from '../private-rout/private-route-login-signup/private-route-login-signup';
export default function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AddressesRoute.Main} element={<Layout />}>
          <Route index element={<MainPage />} />
        </ Route>
        <Route path={AddressesRoute.SignUp} element={
          <PrivateRouteLoginSignup>
            <AutorizationPage />
          </PrivateRouteLoginSignup>
        }
        />
        <Route path={AddressesRoute.LogIn} element={
          <PrivateRouteLoginSignup>
            <LogInPage />
          </PrivateRouteLoginSignup>
        }
        />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </HistoryRouter>
  );
}
