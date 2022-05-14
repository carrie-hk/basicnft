// SPDX-License-Identifier: MIT
pragma solidity >=0.4.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TimeCapsule is ERC721URIStorage{

    constructor() ERC721("TimeCapsule", "TC") {}

	function writeTo(uint256 tokenid, string memory tokenURI) public returns (uint256) {
        _mint(msg.sender, tokenid);
		_setTokenURI(tokenid, tokenURI);
        return tokenid;
	}

	function updateMetadata(uint256 tokenid, string memory tokenURI) public returns (uint256) {
		_setTokenURI(tokenid, tokenURI);
        return tokenid;
	}

	function transfer(uint256 tokenid, address recipient) public {
		transferFrom(msg.sender, recipient, tokenid);
	}
}




