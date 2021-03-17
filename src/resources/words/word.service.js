const wordsRepo = require('./word.memory.repository');
const Word = require('./word.model');

const getAll = async () => {
  const words = await wordsRepo.getAll();
  return words.map(Word.toResponse).length;
};

const postWord = async word => {
  const wordNew = await new Word(word);
  return await wordsRepo.post(wordNew);
};

module.exports = { getAll, postWord };
