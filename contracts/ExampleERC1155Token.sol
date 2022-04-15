// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

// OpenSea Proxy for reduced fees.
contract OwnableDelegateProxy { }

contract ProxyRegistry {
  mapping(address => OwnableDelegateProxy) public proxies;
}

contract ExampleERC1155Token is ERC1155PresetMinterPauser {

    // Proxy address.
    address public proxyRegistryAddress;
    // Contract name
    string public name = "ExampleERC1155Token V2";
    // Contract symbol
    string public symbol = "EXERC1155V2";
    // Contract metadata URI.
    string public contractURI;

    constructor() ERC1155PresetMinterPauser(
      "https://web3-react-starter.surge.sh/metadata/{id}.json"
    ) {}

    /// @notice Method to set contract-level metadata.
    function setContractURI(string calldata _uri) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "Admin only");
        contractURI = _uri;
    }

    /// @notice Override isApprovedForAll to whitelist user's OpenSea proxy accounts to enable gas-free listings.
    /// @dev See {IERC1155-isApprovedForAll}.
    function isApprovedForAll(
      address _owner,
      address _operator
    ) public view override returns (bool isOperator) {
      // Whitelist OpenSea proxy contract for easy trading.
      ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
      if (address(proxyRegistry.proxies(_owner)) == _operator) {
        return true;
      }
      return ERC1155.isApprovedForAll(_owner, _operator);
    }

    /// @notice Set proxy registry address.
    function setProxyRegistryAddress(address _proxyRegistryAddress) external {
        require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "Admin only");
        proxyRegistryAddress = _proxyRegistryAddress;
    }
}
