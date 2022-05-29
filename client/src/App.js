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
import { Navbar } from './components/Navbar/Navbar';
import { ONavbar } from './components/ONavbar/Navbar';
import { Dropdown } from './components/Navbar/Dropdown';
import { ProfileDropdown } from './components/Navbar/ProfileDropdown';
import { JobsThird } from './pages/Jobs/JobsThird';
import { Product } from './pages/Product/Product';
import { AboutUs } from './pages/About/AboutUs/AboutUs';
import Cart from "./components/Cart";
import Carousel from './components/Carousel/Carousel';
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

          <Route exact path="/cart" element={<Carts />} />

          <Route exact path="/loginsignup" element={<LoginSignup />} />

          <Route exact path="/signuplogin" element={<SignupLogin />} />

          <Route exact path="/sloginsignup" element={<SLoginSignup />} />

          <Route exact path="/ssignuplogin" element={<SSignupLogin />} />

          <Route exact path="/" element={<MDashboard />} />

          <Route exact path="/dashboard" element={<Dashboard />} />

          <Route exact path="/Jobs" element={<Job />} />

          <Route exact path="/Product" element={<Produc />} />

          <Route exact path="/AboutUs" element={<Us />} />

        </Routes>

      </Router>

    </div>
  );

  function MDashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);
          // console.log('ABC');
        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });

    const [isOpens, setIsOpens] = useState(false);

    const toggles = () => {
      setIsOpens(!isOpens);
    };
    return (
      <>
        <Navbar toggle={toggle} toggles={toggles} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <ProfileDropdown isOpens={isOpens} toggle={toggles} />
        <Carousel />
        <Trendings />
        <Category />
        <OtherProduct />
        <WhyUse />
        <Footer />
      </>
    );
  }

  function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);
          // console.log('ABC');
        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });

    const [isOpens, setIsOpens] = useState(false);

    const toggles = () => {
      setIsOpens(!isOpens);
    };
    return (
      <>
        <ONavbar toggle={toggle} toggles={toggles} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <ProfileDropdown isOpens={isOpens} toggle={toggles} />
        <Carousel />
        <Trendings />
        <Category />
        <OtherProduct />
        <WhyUse />
        <Footer />
      </>
    );
  }

  function Us() {
    const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //   setIsOpen(!isOpen);
    // };

    useEffect(() => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen) {
          setIsOpen(false);
          // console.log('ABC');
        }
      };

      window.addEventListener('resize', hideMenu);

      return () => {
        window.removeEventListener('resize', hideMenu);
      };
    });
    return (
      <>
        <AboutUs />
        <Footer />
      </>
    );
  }

  function Job() {
    return (
      <>
        <JobsThird />
        <Footer />
      </>
    )
  }

  function Produc() {
    return (
      <>
        <ONavbar />
        <Product />
        <Footer />
      </>
    )
  }

  function Carts() {
    return (
      <>
        <Cart />
        <Footer />
      </>
    )
  }


}

export default App;
