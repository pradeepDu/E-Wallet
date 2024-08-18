// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.19;

contract Transactions {

    uint256 public transactionCounter;

    event Transfer(
        address indexed from, 
        address indexed receiver, 
        uint amount, 
        string message, 
        uint256 timestamp, 
        string keycode
    );

    struct TransferStructure {
        address sender;
        address receiver;
        uint amount;
        string message;
        string keycode;
        uint256 timestamp;
    }

    TransferStructure[] public transactions;

    function addToBlockchain(
        address payable receiver, 
        uint amount, 
        string memory message, 
        string memory keycode
    ) public {
        transactionCounter++;

        transactions.push(
            TransferStructure({
                sender: msg.sender,
                receiver: receiver,
                amount: amount,
                message: message,
                keycode: keycode,
                timestamp: block.timestamp
            })
        );

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keycode);
    }

    function getAllTransactions() public view returns (TransferStructure[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}
