//Weather wear
const clothes = [
  'a down jacket and a knitted hat',
  'a coat and warm trousers',
  'a jacket and a sweater',
  'a shirt and jeans',
  'a t-shirt and shorts',
  'a swimsuit and sunscreen',
];
const temperatures = [-10, 0, 10, 20, 30];

function getClothesRecommendation(temperature) {
  for (let i = 0; i < temperatures.length; i++) {
    if (temperature <= temperatures[i]) {
      return clothes[i];
    }
  }
  return clothes[clothes.length - 1];
}

console.log(getClothesRecommendation(-18)); // "a down jacket and a knitted hat"
console.log(getClothesRecommendation(-8)); // "a coat and warm trousers"
console.log(getClothesRecommendation(5)); // "a jacket and a sweater"
console.log(getClothesRecommendation(14)); // "a shirt and jeans"
console.log(getClothesRecommendation(22)); //"a t-shirt and shorts"
console.log(getClothesRecommendation(35)); // "a swimsuit and sunscreen"
