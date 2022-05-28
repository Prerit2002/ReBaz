import React, { useState, useEffect } from 'react';
import './App.css';
import Web3 from 'web3/dist/web3.min.js'
import hack from './contracts/hack.json'
import { LoginSignup } from './components/UserLoginSignup/LoginSignup';
import { SignupLogin } from './components/UserLoginSignup/SignupLogin';
import { WhyUse } from './components/WhyUse/WhyUse';
import { SLoginSignup } from './components/SellerLoginSignup/LoginSignup';
import { SSignupLogin } from './components/SellerLoginSignup/SignupLogin';
import { Trendings } from './components/Trending/Trendings';
import { Category } from './components/Category/Category';
import { OtherProduct } from './components/OtherProduct/OtherProduct';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/navbar';
import Cart from "./components/Cart";
import Carousel from './components/Carousel/Carousel';
import { Product } from './components/Product/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [state, setState] = useState({ account: "" })
  async function loadBlockchainData() {
    window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    const network = await web3.eth.net.getNetworkType()
    console.log("network:", network)
    setState((state) => ({ ...state, account: accounts[0] }))
    const auctionContract = new web3.eth.Contract(hack.abi, accounts[0])
    setState(state => ({ ...state, auctionContract }))
  }

  const pay = (address, value) => {
    alert("hi")
    state.auctionContract.methods.pay(address).send({ from: state.account, value }).on('receipt', (receipt) => {
      console.log(receipt)
    }).on('error', (error) => {
      console.log(error)
    })

  }





  useEffect(() => {
    loadBlockchainData()
  }, [])

  return (
    <div className="App">
      <Router>

        <Routes>

          {/* <Route exact path="/" element={<Cart />} />

          <Route exact path="/" element={<Product />} />*/}

          <Route exact path="/" element={<LoginSignup />} />

          <Route exact path="/signuplogin" element={<SignupLogin />} />

          {/* <Route exact path="/" element={<SLoginSignup />} />

          <Route exact path="/signuplogin" element={<SSignupLogin />} /> */}

          <Route exact path="/dashboard" element={<Dashboard />} />

          {/* <Route exact path="/" element={<Trendings />} /> */}

        </Routes>

      </Router>

    </div>
  );

  function Dashboard() {
    return (
      <>
        <Navbar />
        <Carousel />
        <Trendings />
        <Category />
        <OtherProduct />
        <WhyUse />
        <Footer />
      </>
    );
  }
}

export default App;
