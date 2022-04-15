require("dotenv").config();

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    rinkeby: {
      url: process.env.ALCHEMY_ENDPOINT_RINKEBY || "https://eth-rinkeby.alchemyapi.io/v2/67890",
      accounts: [process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000"]
    },
  },
  gasReporter: {
    url: "http://localhost:8545"
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
};
