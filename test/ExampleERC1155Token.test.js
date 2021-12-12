const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ExampleERC1155Token", function () {

  let contract, ExampleERC1155Token, owner;

  before(async function() {
    // Get addresses.
    [owner, secondAddress] = await ethers.getSigners();
    // Compile and deploy contract.
    contract = await ethers.getContractFactory("ExampleERC1155Token");
    ExampleERC1155Token = await contract.deploy();
    await ExampleERC1155Token.deployed();
  });

  it("should mint a token", async function () {
    // Setup mint parameters.
    const to = secondAddress.address;
    const from = ethers.constants.AddressZero;
    const id = 1;
    const amount = 1;
    const data = ethers.utils.formatBytes32String("");
    // Mint token and verify event.
    await expect(ExampleERC1155Token.mint(to, id, amount, data))
      .to.emit(ExampleERC1155Token, "TransferSingle")
      .withArgs(owner.address, from, to, id, amount);
    // Verify token is minted to the owner.
    expect(await ExampleERC1155Token.balanceOf(to, id)).to.equal(amount);
  });
});
