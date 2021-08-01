import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from "ethers";

import './App.css';
import ConnectInfo from './components/ConnectInfo';
import ConnectInjected from './components/ConnectInjected';
import ConnectWalletConnect from './components/ConnectWalletConnect';

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <header>
          Test different connectors below
        </header>
        <ConnectInjected />
        <ConnectWalletConnect />
        <ConnectInfo />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
