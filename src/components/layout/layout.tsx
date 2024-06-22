import Header from './header/header';
import Footer from './footer/footer';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
