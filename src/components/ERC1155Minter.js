import { useWeb3React } from '@web3-react/core';
import { useState } from "react";

import { ethers } from 'ethers';
import ExampleERC1155Token from '../artifacts/contracts/ExampleERC1155Token.sol/ExampleERC1155Token.json';

export default function ERC1155Minter() {
  // Hook to get web3react library and connected wallet.
  const web3React = useWeb3React();

  // State hooks for React component.
  const [tokenId, setTokenId] = useState(0);
  const [msg, setMsg] = useState('');
  const [balance, setBalance] = useState(null);

  // ERC1155 contract address. Change this if different from deploy.
  const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

  // Function to check if wallet is connected.
  function walletConnected() {
    return web3React.active;
  }

  // Function to update the token ID from the user input.
  function updateTokenId(id) {
    id = parseInt(id || 0);
    setTokenId(id);
    setMsg('');
    getBalance(id);
  }

  // Function to get the contract.
  function getContract() {
    let tokenContract = null;
    if (walletConnected()) {
      // Set the signer (connected wallet).
      const signer = web3React.library.getSigner(web3React.account);
      // Configure and set contract.
      tokenContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        ExampleERC1155Token.abi,
        signer
      );
    }
    return tokenContract;
  }

  // Function to get balance for a given token ID.
  async function getBalance(id) {
    const tokenContract = getContract();
    if (tokenContract) {
      const bigBalance = await tokenContract.balanceOf(web3React.account, id);
      setBalance(bigBalance.toString());
    }
  }

  // Function for single token mint.
  async function mintToken() {
    const tokenContract = getContract();
    if (tokenContract) {
      // Setup mint parameters.
      const to = web3React.account;
      const id = tokenId;
      const amount = 1;
      const data = ethers.utils.formatBytes32String("");
      // Mint token.
      try {
        setMsg(`Minting... `);

        // Calling a contract function is async.
        const txn = await tokenContract.mint(to, id, amount, data);
        // Resulting transaction has an async wait for convenience.
        await txn.wait();

        setMsg(`Minted ${tokenId} 🎉`);
        getBalance(tokenId);
      } catch (err) {
        console.log(err);
        setMsg(err.message);
      }
    }
  }

  return <div className="App-connector">
    <h2>Minter</h2>
    <label for="tokenId">Token ID</label>
    <br />
    <input
      name="tokenId"
      type="number"
      min="0"
      onChange={e => updateTokenId(e.target.value)}
      value={tokenId}
      disabled={!walletConnected()}
      autoComplete="off" />
    <br />
    <button onClick={mintToken} disabled={!walletConnected()}>Mint Token!</button>
    {msg &&
    <p>{msg}</p>
    }
    {balance != null &&
    <p>Balance of ID {tokenId}: {balance}</p>
    }
  </div>;
}
