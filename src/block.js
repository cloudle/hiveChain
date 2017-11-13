const sha256 = require('crypto-js/sha256');

function generateBlock(essentials, data = {}) {
	return Object.assign(essentials, { data, hash: calculateHash(essentials, data) })
}

function calculateHash({ index, time, previousHash = '', data = {} }) {
	return sha256(`${index}:${previousHash}:${time}:${JSON.stringify(data)}`).toString();
}

module.exports = { generateBlock, calculateHash, };