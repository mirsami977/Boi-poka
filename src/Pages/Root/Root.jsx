import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;