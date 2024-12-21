import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";
import Footer from "./Footer/Footer";

export default function Layout() {
  const pathname = useLocation().pathname;

  return (
    <>
      {pathname != "/" && <MainHeader />}

      <Outlet />

      <Footer />
    </>
  );
}
