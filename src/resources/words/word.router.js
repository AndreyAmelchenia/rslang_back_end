const router = require('express').Router();
const Word = require('./word.model');
const wordsService = require('./word.service');

router.route('/').get(async (req, res) => {
  const words = await wordsService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(
    words
      .map(Word.toResponse)
      .filter(el => el.id > 0 && el.id < 601)
      .sort((a, b) => a.id - b.id)
  );
});

router.route('/').post(async (req, res) => {
  const word = { ...req.body };
  // console.log('word----------', req.body);
  const wordNew = await new Word(word);
  await wordsService.postWord(wordNew);
  res.json(wordNew);
});

module.exports = router;
