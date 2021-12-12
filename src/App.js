import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from "ethers";

import './App.css';
import ConnectInfo from './components/ConnectInfo';
import ConnectInjected from './components/ConnectInjected';
import ERC1155Minter from './components/ERC1155Minter';

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <header>
          Test ERC-1155 minting below
        </header>
        <ConnectInjected />
        <ConnectInfo />
        <ERC1155Minter />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
