
import { Outlet,Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from './Footer';
import Sidebar from './Sidebar';

const SharedLayout = () =>{
    return (
        <>
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
        </>
    )
}

export default SharedLayout;