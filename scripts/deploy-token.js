const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.getContractFactory("ExampleERC1155Token");
  const ExampleERC1155Token = await contract.deploy();

  await ExampleERC1155Token.deployed();

  console.log("ExampleERC1155Token deployed to:", ExampleERC1155Token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
