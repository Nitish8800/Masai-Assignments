function checkEvenNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== 'number' || num % 2 !== 0) {
      reject(`${num} is odd or invalid`);
    } else {
      resolve(`${num} is even`);
    }
  });
}

checkEvenNumber(4).then(console.log).catch(console.error);
checkEvenNumber(5).then(console.log).catch(console.error);
checkEvenNumber('text').then(console.log).catch(console.error);