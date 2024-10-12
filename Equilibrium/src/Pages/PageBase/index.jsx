import Header from "../../components/header";
import { Outlet } from "react-router-dom";

function PageBase() {
  return (
    <main>
      <Header />

      <Outlet />
    </main>
  );
}

export default PageBase;
