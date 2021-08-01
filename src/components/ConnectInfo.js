import { useWeb3React } from '@web3-react/core';

export default function ConnectInfo() {
  const web3React = useWeb3React();

  return <>
    <p>Chain Id: {web3React.chainId || 'N/A'}</p>
    <p>Account: {web3React.account || 'N/A'}</p>
    <p>Active: {web3React.active ? 'Yes 👍' : 'No 👎'}</p>
  </>;
}
