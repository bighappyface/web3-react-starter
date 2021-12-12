import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

// Configured for all major networks and local node 31337
const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 31337] });

export default function ConnectInjected() {
  const web3React = useWeb3React();

  function initConnection() {
    web3React.activate(injected);
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
