import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Screen/Home";
import About from "./pages/Screen/About";
import Contact from "./pages/Screen/Contact";
import Service from "./pages/Screen/Service";

export default function Routing() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "service", element: <Service /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
