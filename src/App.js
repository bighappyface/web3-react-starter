import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { ethers } from "ethers";

import './App.css';
import ConnectInfo from './components/ConnectInfo';
import ConnectInjected from './components/ConnectInjected';

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function App() {
  const web3React = useWeb3React();

  console.log('w3r', web3React);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <header>
          Test different connectors below
        </header>
        <ConnectInjected />
        <ConnectInfo />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
