import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({ supportedChainIds: [42] });

export default function ConnectInjectedButton() {
  const web3React = useWeb3React();

  function initConnection() {

    web3React.activate(injected).then(acct => {
      console.log(acct);
    });
  }

  return <div className="App-connector">
    <p>Chain Id: {web3React.chainId}</p>
    <p>Account: {web3React.account}</p>
    <button onClick={initConnection}>{web3React.account ? 'Connected' : 'Connect Injected'}</button>
  </div>;
}
