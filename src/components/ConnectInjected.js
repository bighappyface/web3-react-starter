import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({ supportedChainIds: [3, 4, 5, 42] });

export default function ConnectInjectedButton() {
  const web3React = useWeb3React();

  function initConnection() {
    web3React.activate(injected).then(acct => {
      console.log(acct);
    });
  }

  function closeConnection() {
    web3React.deactivate();
  }

  function activeIsInjected() {
    return web3React.account && web3React.connector instanceof InjectedConnector;
  }

  return <div className="App-connector">
    <h2>Injected</h2>
    <button onClick={initConnection}>{activeIsInjected() ? 'Connected 🔗' : 'Activate 🔌'}</button>
    { activeIsInjected() &&
    <button onClick={closeConnection}>Deactivate 👋</button>
    }
  </div>;
}
