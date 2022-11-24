const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
// the possible colors that the hash could represent
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {

    return colors.find(color => toHex(sha256(utf8ToBytes(color))) === toHex(hash)); 
  
  }


findColor(sha256(utf8ToBytes('blue')));