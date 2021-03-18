const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { addMethods } = require('../../utils/toResponse');

const WordsSchema = new Schema(
  {
    group: { type: Number, required: true },
    page: { type: Number, required: true },
    word: { type: String, required: true, max: 100 },
    image: { type: String, required: false, max: 150 },
    audio: { type: String, required: false, max: 150 },
    audioMeaning: { type: String, required: false, max: 1500 },
    audioExample: { type: String, required: false, max: 1500 },
    textMeaning: { type: String, required: false, max: 3000 },
    textExample: { type: String, required: false, max: 3000 },
    transcription: { type: String, required: false, max: 100 },
    wordTranslate: String,
    textMeaningTranslate: String,
    textExampleTranslate: String
  },
  { collection: 'words' }
);

addMethods(WordsSchema);

module.exports = mongoose.model('Words', WordsSchema);
