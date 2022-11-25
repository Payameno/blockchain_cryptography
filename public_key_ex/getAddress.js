//get ethereum address using public key: Uint8Array

const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    
    const removeFormat = publicKey.slice(1,65);
    const keccakHash = keccak256(removeFormat);
    const ethereumAddress = keccakHash.slice(12,32);
    return ethereumAddress;
    
}