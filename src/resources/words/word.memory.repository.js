const Word = require('./word.model');

const getAll = async () => Word.find({});

const post = async user => Word.create(user);

module.exports = { getAll, post };
