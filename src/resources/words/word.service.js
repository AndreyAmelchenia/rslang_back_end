const wordsRepo = require('./word.memory.repository');

const getAll = () => wordsRepo.getAll();

const postWord = async word => wordsRepo.post(word);

module.exports = { getAll, postWord };
