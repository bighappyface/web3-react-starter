// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

contract ExampleERC1155Token is ERC1155PresetMinterPauser {
    constructor() ERC1155PresetMinterPauser(
      "https://token.example/api/item/{id}.json"
    ) {}
}
