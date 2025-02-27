import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import InfoBlocks from './components/infoBlocks/InfoBlocks';
import Users from './components/users/Users';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <InfoBlocks />
                <Users />
            </main>
            <Footer />
        </div>
    );
};

export default App;