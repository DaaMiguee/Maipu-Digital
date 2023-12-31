import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicesPage";

const MainRouter = () => {
  const Home = lazy(() => import("../pages/Home"));
  const Products = lazy(() => import("../pages/Products"));
  const CartPage = lazy(() => import("../pages/CartPage"));

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/favoritos" element={<CartPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/servicios" element={<ServicePage />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};
const Layout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default MainRouter;
