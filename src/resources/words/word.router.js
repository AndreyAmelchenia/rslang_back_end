const router = require('express').Router();
const wordsService = require('./word.service');

router.route('/').get(async (req, res) => {
  const words = await wordsService.getAll();
  res.json(words);
});

router.route('/').post(async (req, res) => {
  const word = await wordsService.postWord({ ...req.body });
  res.json(word);
});

module.exports = router;
