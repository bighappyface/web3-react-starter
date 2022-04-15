// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract ExampleERC721Token is ERC721PresetMinterPauserAutoId {
    constructor() ERC721PresetMinterPauserAutoId(
      "Example ERC-721 Token",
      "EXAMPLE721",
      "https://web3-react-starter.surge.sh/metadata/"
    ) {}
}
