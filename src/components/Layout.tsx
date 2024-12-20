import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";

export default function Layout() {
  const pathname = useLocation().pathname;

  return (
    <>
      {pathname != "/" && <MainHeader />}

      <Outlet />
    </>
  );
}
