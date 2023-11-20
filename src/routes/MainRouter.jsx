import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar/NavBar';
import Home from '../pages/Home'
import Footer from "../components/Footer/Footer"
import ContactPage from '../pages/ContactPage';


const MainRouter = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default MainRouter