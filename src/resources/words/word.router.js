const router = require('express').Router();
const Word = require('./word.model');
const wordsService = require('./word.service');

router.route('/').get(async (req, res) => {
  const words = await wordsService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(words.map(Word.toResponse));
});

module.exports = router;
