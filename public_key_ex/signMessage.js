const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "Hidden";

async function signMessage(msg) {

    const hash = hashMessage(msg);
    console.log('hash', hash);
    const signedMessage = await secp.sign(hash, PRIVATE_KEY, { recovered: true });
    return signedMessage;
    
}