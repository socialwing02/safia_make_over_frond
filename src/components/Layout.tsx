import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";
import Footer from "./Footer/Footer";
import { useEffect } from "react";

export default function Layout() {
  const pathname = useLocation().pathname;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      {pathname != "/" && <MainHeader />}

      <Outlet />

      <Footer />
    </>
  );
}
