
//https://eth-sepolia.g.alchemy.com/v2/3WKyJT6bOfqzeL2rf1wfKMwAj0KD-X91
require('@nomiclabs/hardhat-waffle');
 module.exports = {
    solidity:'0.8.19', 
    networks:{
        sepolia:{
            url:'https://eth-sepolia.g.alchemy.com/v2/3WKyJT6bOfqzeL2rf1wfKMwAj0KD-X91',
            accounts :['c99193b73d9265b6366d97f655e1a4e09e70269f1549acfa004ea6deeae8de8d']
    }
    
 }
}
