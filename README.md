# Web3 React Starter

This repo serves as a starter application for using and learning Web3 React and its various connectors.

Moreover, it demonstrates use of hooks with components typical of a dapp (e.g. input HTML tags, output tags).

Hopefully this make the use of Web3 React more clear for people ready to tackle a new dapp.

All of the documentation below applies. For more information on Web3 React, please use the link below.

https://github.com/NoahZinsmeister/web3-react

# 1. Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# 2. Hardhat

This project uses [https://hardhat.org/](Hardhat) for Ethereum smart contract development.

## Installation

Run `yarn add hardhat` to install the latest version of Hardhat.

## Setup

Run `npx hardhat init` to setup the hardhat project in this repository. Selected "basic project" template.

Update `hardhat.config.js` to use Solidity version 0.8.9 (or higher).

### Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# 3. OpenZeppelin

This project uses the [OpenZeppelin](https://docs.openzeppelin.com/openzeppelin/) family of secure smart contracts that implement popular standards such as ERC-20, ERC-721, ERC-1155, etc.

## Installation

Run `yarn add @openzeppelin/contracts` to install the latest version of the smart contracts.

The smart contracts are located at `node_modules/@openzeppelin/contracts`.

# 4. Create basic ERC-1155 smart contract

Create a new contract `contracts/ExampleERC1155Token.sol` that implements the OpenZeppelin ERC-1155 contract.

This example will use the `ERC1155PresetMinterPauser` preset contract that exposes `mint` functionality along with other conventional needs like access control, pause, burn, etc.

## Smart Contract Testing

Run `yarn add @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers` to install smart contract testing functionality in Hardhat.

Run `npx hardhat test` to test the example ERC-1155 contract `mint` functionality.

# 5. Setup Hardhat local chain and ERC-1155 contract artifacts

Update `hardhat.config.js` to include the Hardhat local network with chain ID 31337. This will give us a unique local blockchain ID that we can run from the command line, deploy the ERC-1155 contract to, and connect to with our React app for minting.

Update `hardhat.config.js` to change the artifacts directory to be within the `src` directory. This will allow us to use the contract ABIs with `ethers` within out React components so that we can call `mint` and other contract functions.
