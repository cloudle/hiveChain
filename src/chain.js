const { generateBlock, calculateHash } = require('./block');

const genesisBlock = generateBlock({
	index: 0, time: new Date(), previousHash: '0',
}, 'GENESIS BLOCK');

const hiveChain = [genesisBlock];

function addBock(data = {}) {
	const previousBlock = hiveChain[hiveChain.length - 1];

	const newBlock = generateBlock({
		index: previousBlock.index + 1,
		time: new Date(),
		previousHash: previousBlock.hash,
		hash: calculateHash(previousBlock),
	}, data);

	hiveChain.push(newBlock);
}

function isChainValid() {
	for (const i = 1; i < hiveChain.length; i++) {
		const currentBlock = hiveChain[i],
			previousBlock = hiveChain[i - 1];

		if (currentBlock.previousHash !== previousBlock.hash) return false;
		console.log(currentBlock.hash, calculateHash(currentBlock));
		if (currentBlock.hash !== calculateHash(currentBlock)) return false;
	}

	return true;
}

module.exports = { hiveChain, addBock, isChainValid };