const wordsRepo = require('./word.memory.repository');

const getAll = () => wordsRepo.getAll();

module.exports = { getAll };
