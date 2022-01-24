import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png';
import './navbar.css';
import Web3 from "web3";
import Home from "../Home/Home"
import Login from "../Login/Login";

const Navbar = () => {

  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      setIsConnected(true);
    }
  };

  const onLogout = () => {
    setIsConnected(false);
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Glossary</a></p>
          <p><a href="#possibility">Free Roulette</a></p>
          <p><a href="#features">Swap</a></p>
          <p><a href="#blog">Liquidity</a></p>
          <p><a href="#blog">Banks</a></p>
          <p><a href="#blog">NFT</a></p>
         
        </div>
      </div>
      <div className="gpt3__navbar-sign">
       
      {!isConnected && <Login onLogin={onLogin} onLogout={onLogout} />}
        {isConnected && (
          <Home currentAccount={currentAccount}/>
        )}
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Glossary</a></p>
          <p><a href="#possibility">Free Roulette</a></p>
          <p><a href="#features">Swap</a></p>
          <p><a href="#blog">Liquidity</a></p>
          <p><a href="#blog">Banks</a></p>
          <p><a href="#blog">NFT</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            
          {!isConnected && <Login onLogin={onLogin} onLogout={onLogout} />}
        {isConnected && (
          <Home currentAccount={currentAccount}/>
        )}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;