import React from 'react';
import {Footer,Blog,Features,WhatSpiderSwap,Header, Possibility} from './containers';
import {Cta,Brand,Navbar} from './components';
import './App.css';


const App = () => {
    return (
        <div className= "App">
            <div className='gradient__bg'>
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatSpiderSwap/>
            <Features/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
            

            
        </div>
    )
}

export default App
