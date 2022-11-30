const Block = require('./Block');

class Blockchain {

  // Blockchain constructor - we Add the genesis block to the constructor
    constructor() {
        this.chain = [ new Block ];
    }

  //Function to add a new block to the blockchain
    addBlock(newBlock) {
        this.chain.push(newBlock);
    }
}