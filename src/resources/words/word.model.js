const uuid = require('uuid');

class Word {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(obj) {
    const { id, word, wordTranslate } = obj;
    return { id, word, wordTranslate };
  }
}

module.exports = Word;
