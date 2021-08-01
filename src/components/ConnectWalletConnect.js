import { useWeb3React } from '@web3-react/core';
import { WalletConnectConnector, UserRejectedRequestError  } from '@web3-react/walletconnect-connector';

const wc = new WalletConnectConnector({
  infuraId: "0168c4f5d973491daae8d12b05e2f051",
  supportedChainIds: [1, 3, 4, 5, 42],
  qrcode: true,
  pollingInterval: 12000
});

export default function ConnectWalletConnect() {
  const web3React = useWeb3React();

  function handleError(error) {

    if (error instanceof UserRejectedRequestError) {
      wc.handleDisconnect();
    }

  }

  function initConnection() {
    web3React.activate(wc, handleError);
  }

  function closeConnection() {
    wc.close();
  }

  function activeIsWC() {
    return web3React.account && web3React.connector instanceof WalletConnectConnector;
  }

  return <div className="App-connector">
    <h2>Wallet Connect</h2>
    <button onClick={initConnection}>{activeIsWC() ? 'Connected 🔗' : 'Activate 🔌'}</button>
    { activeIsWC() &&
    <button onClick={closeConnection}>Deactivate 👋</button>
    }
  </div>;
}
