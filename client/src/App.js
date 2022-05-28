import { useEffect, useState } from "react"
import './App.css';
import Web3 from 'web3/dist/web3.min.js'
import contract from './contracts/hack.json'

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

  const pay = (address , value) => {
    state.auctionContract.methods.pay(address).send({ from: state.account, value  }).on('receipt' , (receipt) => {
      console.log(receipt)
    }).on('error' , (error) => {
      console.log(error)
    })

  }





  useEffect(() => {
    loadBlockchainData()
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
