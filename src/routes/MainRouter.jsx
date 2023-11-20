import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import NavBar from '../components/NavBar/NavBar';
import Loader from '../components/Loader/Loader';

const MainRouter = () => {
    const Home = lazy(() => import("../pages/Home"))
    const Products = lazy(() => import("../pages/Products"))
    const CartPage = lazy(() => import("../pages/CartPage"))

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/productos' element={<Products />} />
                    <Route path='/favoritos' element={<CartPage />} />
                </Route>
            </Routes>
        </Router>
    )
}
const Layout =() => {
    return (
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
    )
}

export default MainRouter