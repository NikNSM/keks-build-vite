import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddressesRoute } from "../../const";
import MainPage from "../main-page/main-page";
export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AddressesRoute.Main} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
