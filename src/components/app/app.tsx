import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddressesRoute } from '../../const';
import Layout from '../layout/layout';
import MainPage from '../main-page/main-page';
import AutorizationPage from '../autorization-page/autorization-page';
import LogInPage from '../login-page/login-page';
import Page404 from '../page-404/page-404';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AddressesRoute.Main} element={<Layout />}>
          <Route index element={<MainPage />} />
        </ Route>
        <Route path={AddressesRoute.SignUp} element={<AutorizationPage />} />
        <Route path={AddressesRoute.LogIn} element={<LogInPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
