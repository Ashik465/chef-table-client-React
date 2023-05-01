import React from 'react';
import Header from '../shared-pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared-pages/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className=" min-h-[calc(100vh-136px)]"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;