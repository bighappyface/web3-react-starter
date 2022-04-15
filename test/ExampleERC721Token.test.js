const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ExampleERC721Token", function () {

  let contract, ExampleERC721Token, owner;

  before(async function() {
    // Get addresses.
    [owner, secondAddress] = await ethers.getSigners();
    // Compile and deploy contract.
    contract = await ethers.getContractFactory("ExampleERC721Token");
    ExampleERC721Token = await contract.deploy();
    await ExampleERC721Token.deployed();
  });

  it("should mint a token", async function () {
    // Setup mint parameters.
    const to = secondAddress.address;
    // Mint token and verify event.
    await expect(ExampleERC721Token.mint(to))
      .to.emit(ExampleERC721Token, "Transfer");
    // Verify token is minted to the owner.
    expect(await ExampleERC721Token.ownerOf(0)).to.equal(to);
  });
});
