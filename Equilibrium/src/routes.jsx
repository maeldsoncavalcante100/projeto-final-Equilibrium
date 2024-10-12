import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./Pages/PageBase";
import Home from "./Pages/Home";
import Sobre from './Pages/Sobre'
import Indicacoes from './Pages/Indicacoes'
import Login from './Pages/Login/login'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/indicacoes" element={<Indicacoes />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
