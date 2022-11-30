const Block = require('./Block');

// Blockchain constructor - we Add the genesis block to the constructor

class Blockchain {
    constructor() {
        this.chain = [ new Block ];
    }
}
