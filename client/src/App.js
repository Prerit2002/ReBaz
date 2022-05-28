import React, { useState, useEffect } from 'react';
import './App.css';
import Web3 from 'web3/dist/web3.min.js'
import contract from './contracts/hack.json'
import { LoginSignup } from './components/LoginSignup/LoginSignup';
import { SignupLogin } from './components/LoginSignup/SignupLogin';
import { Trendings } from './components/Trending/Trendings';
import { Category } from './components/Category/Category';
import  Carousel  from './components/Carousel/Carousel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [state, setState] = useState({ account: "" })
  async function loadBlockchainData() {
    window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    const network = await web3.eth.net.getNetworkType()
    console.log("network:", network)
    setState((state) => ({ ...state, account: accounts[0] }))
    const auctionContract = new web3.eth.Contract(contract, accounts[0])
    setState(state => ({ ...state, auctionContract }))
  }

  const pay = (address, value) => {
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

        <Route exact path="/" element={<Carousel />} />

          {/* <Route exact path="/" element={<Category />} />

          <Route exact path="/" element={<LoginSignup />} />

          <Route exact path="/signuplogin" element={<SignupLogin />} />

          <Route exact path="/" element={<Trendings />} /> */}

        </Routes>

      </Router>

    </div>
  );
}

export default App;
