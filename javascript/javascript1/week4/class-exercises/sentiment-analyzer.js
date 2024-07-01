const positiveWordsList = [
  'cool',
  'awesome',
  'super',
  'amazing',
  'fantastic',
  'brilliant',
  'remarkable',
  'incredible',
  'spectacular',
  'outstanding',
  'exceptional',
  'wonderful',
  'magnificent',
  'phenomenal',
  'happy',
];

const negativeWordsList = [
  'boring',
  'sad',
  'upset',
  'terrible',
  'awful',
  'horrible',
  'dismal',
  'dreary',
  'gloomy',
  'disappointing',
  'lackluster',
  'mediocre',
  'troublesome',
  'annoying',
  'distressing',
];

function getCommonWordsArray(sentence, wordsList) {
  const commonWords = [];
  for (let i = 0; i < wordsList.length; i++) {
    const word = wordsList[i];
    if (sentence.includes(word)) {
      commonWords.push(word);
    }
  }
  return commonWords;
}

function getSentimentScore(string) {
  const positiveWords = getCommonWordsArray(string, positiveWordsList);
  const negativeWords = getCommonWordsArray(string, negativeWordsList);
  const score = positiveWords.length - negativeWords.length;
  return { score, positiveWords, negativeWords };
}

const sentimentScoreObject = getSentimentScore(
  'I am mega, super, awesome, happy'
);

console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/

const sentimentScoreObject1 = getSentimentScore(
  'I am mega, boring, super, gloomy, sad, happy'
);

console.log(sentimentScoreObject1);
// {
//   score: -1,
//   positiveWords: [ 'super', 'happy' ],
//   negativeWords: [ 'boring', 'gloomy', 'sad' ]
// }

const sentimentScoreObject2 = getSentimentScore(
  'I am mega, boring, disappointing, gloomy, sad, terrible'
);

console.log(sentimentScoreObject2);
// {
//   score: -5,
//   positiveWords: [],
//   negativeWords: [ 'boring', 'disappointing', 'gloomy', 'sad', 'terrible' ]
// }
