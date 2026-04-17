import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Root = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <Banner></Banner>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;