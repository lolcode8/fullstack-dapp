//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token {
  string public name = "Rahul Joke Token";
  string public symbol = "LUL";
  uint public totalSupply = 1000000;
  // Mapping is like a hash map in JS
  // i.e. const balances = { address: uint } in Typescipt
  // The balances variable will be keyed be addresses with the value being the balance in each address   
  mapping(address => uint) balances;

  constructor() {
    balances[msg.sender] = totalSupply;
  }

  function transfer(address to, uint amount) external {
    //   Sort of aconditional, will return the second argument if the predicate errors out. Else, will continue
    require(balances[msg.sender] >= amount, "Not enough tokens");
    balances[msg.sender] -= amount;
    balances[to] += amount;
  }

  function balanceOf(address account) external view returns (uint) {
    return balances[account];
  }
}