const Block = require('./Block');

class Blockchain {

  // Blockchain constructor - we Add the genesis block to the constructor
    constructor() {
        this.chain = [ new Block ];
    }

  //Function to add a new block to the blockchain
    addBlock(newBlock) {
        //Adding previous block Hash to the next block
        block.previousHash = this.chain[this.chain.length - 1].toHash();
        //pushing block the the blockchain array
        this.chain.push(newBlock);
    }
}