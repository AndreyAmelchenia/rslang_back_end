const uuid = require('uuid');
const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema(
  {
    id: {
      type: Number || String,
      default: uuid
    },
    word: String,
    image: String,
    audio: String,
    audioMeaning: String,
    audioExample: String,
    textMeaning: String,
    textExample: String,
    transcription: String,
    wordTranslate: String,
    textMeaningTranslate: String,
    textExampleTranslate: String
  },
  { versionKey: false }
);

wordSchema.statics.toResponse = ({ id, word, wordTranslate }) => ({
  id,
  word,
  wordTranslate
});

const Word = mongoose.model('Words', wordSchema);

module.exports = Word;
