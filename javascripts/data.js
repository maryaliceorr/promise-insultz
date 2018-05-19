const dom = require('./dom');

const descriptors = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/descriptors.json')
      .done((data) => {
        resolve(data.descriptors);
      })
      .fail((err) => {
        reject(`nope that didn't work!`, err);
      });
  });
};

const nouns = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/nouns.json')
      .done((data) => {
        resolve(data.nouns);
      })
      .fail((err) => {
        reject(`npope that didnt work!`, err);
      });
  });
};

const getAllWords = () => {
  let words = [];
  return descriptors()
    .then((result) => {
      words = [...result,];
      return nouns();
    }).then((result2) => {
      words = [...words, result2,];
      return Promise.resolve(words);
    }).catch((errorMsg) => {
      console.error(errorMsg);
    });
};

const initializer = () => {
  getAllWords().then((words) => {
    dom.domString3(words);
  });
};

module.exports = initializer;
