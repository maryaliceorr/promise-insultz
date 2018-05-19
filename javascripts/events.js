const data = require('./data');
const dom = require('./dom');

const insultButton = $('i#nsult-button');

const buttonClick = () => {
  insultButton.click((e) => {
    data().then((word) => {
      dom(word);
    });
  });
};

buttonClick();
