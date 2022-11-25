const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {

    const byteMessage = utf8ToBytes(message);
    const signedMessage = keccak256(byteMessage);
    return signedMessage;
    
}