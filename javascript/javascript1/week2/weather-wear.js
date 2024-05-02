//Weather wear

function getClothesRecommendation(temperature) {
  if (temperature <= -10) {
    return 'a down jacket and a knitted hat';
  } else if (temperature <= 0) {
    return 'a coat and warm trousers';
  } else if (temperature <= 10) {
    return 'a jacket and a sweater';
  } else if (temperature <= 20) {
    return 'a shirt and jeans';
  } else if (temperature <= 30) {
    return 'a t-shirt and shorts';
  } else {
    return 'a swimsuit and sunscreen';
  }
}

console.log(getClothesRecommendation(-18)); // "a down jacket and a knitted hat"
console.log(getClothesRecommendation(-8)); // "a coat and warm trousers"
console.log(getClothesRecommendation(5)); // "a jacket and a sweater"
console.log(getClothesRecommendation(14)); // "a shirt and jeans"
console.log(getClothesRecommendation(22)); //"a t-shirt and shorts"
console.log(getClothesRecommendation(35)); // "a swimsuit and sunscreen"
