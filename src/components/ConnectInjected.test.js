import { render, screen, fireEvent } from '@testing-library/react';
import { Web3ReactProvider, useWeb3React } from '@web3-react/core';
import ConnectInjected from './ConnectInjected';
import { ethers } from "ethers";
import { mock } from 'depay-web3-mock';

mock({
  blockchain: 'ethereum'
});

// This causes the web3 mock to wrap request with send
window.ethereum.send = true;

mock({
  blockchain: 'ethereum',
  provider: window.ethereum
});

function getLibrary(provider) {
  return new ethers.providers.Web3Provider(provider);
}

test('renders connect injected component', () => {
  render(<ConnectInjected />);
  const titleElement = screen.getByText(/injected/i);
  expect(titleElement).toBeInTheDocument();
  const buttonElement = screen.getByText(/activate/i);
  expect(buttonElement).toBeInTheDocument();
});

test('activate button connects to injected wallet', async () => {
  const connectedText = 'Connected 🔗';
  const { findByText, queryByText } = render(<Web3ReactProvider getLibrary={getLibrary}><ConnectInjected /></Web3ReactProvider>);
  expect(await queryByText(connectedText)).not.toBeInTheDocument();
  let buttonElement = await queryByText(/activate/i);
  expect(await queryByText(/activate/i)).toBeInTheDocument();
  fireEvent.click(buttonElement);
  expect(await findByText(connectedText)).toBeInTheDocument();
});
