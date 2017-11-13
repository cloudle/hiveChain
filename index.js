const { hiveChain, addBock, isChainValid } = require('./src/chain');

addBock({ amount: 2000, });
addBock({ amount: 3000, });

console.log(JSON.stringify(hiveChain, null, 2));

console.log('valid?:', isChainValid());