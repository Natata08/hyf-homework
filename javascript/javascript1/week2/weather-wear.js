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
