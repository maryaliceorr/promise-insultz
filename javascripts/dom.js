const outputDiv = $('output-div');

const domString1 = (descriptors1) => {
  descriptors1.forEach((descriptor1) => {
    let domStrang = '';
    domStrang += `<span>${Math.random(descriptor1.text)} </span>`;
  });
};
  const domString2 = (descriptors2) => {
    descriptors1.forEach((descriptor2) => {
      let domStrang = '';
      domStrang += `<span>${Math.random(descriptor2.text)} </span>`;
    });
  };
  const domString3 = (nouns) => {
    nouns.forEach((noun) => {
      let domStrang = '';
      domStrang += `<span>${Math.random(noun.text)}</span>`;
    });
  printToDom(domString1, domString2, domString3);
};

const printToDom = (words) => {
  outputDiv.html(words);
};

module.exports = domString1;
