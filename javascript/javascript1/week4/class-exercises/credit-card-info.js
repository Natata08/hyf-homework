//info from https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests

function getCardInfo(cardNumber) {
  const regexPatterns = {
    Amex: /^3[47][0-9]{13}$/,
    BCGlobal: /^(6541|6556)[0-9]{12}$/,
    CarteBlanche: /^389[0-9]{11}$/,
    DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    Discover:
      /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
    InstaPayment: /^63[7-9][0-9]{13}$/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
    KoreanLocal: /^9[0-9]{15}$/,
    Laser: /^(6304|6706|6709|6771)[0-9]{12,15}$/,
    Maestro: /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/,
    MasterCard:
      /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
    Solo: /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$/,
    Switch:
      /^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$/,
    UnionPay: /^(62[0-9]{14,17})$/,
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    VisaMaster: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/,
    Dankort: /^(5019)[0-9]{12}$/,
  };

  for (const [cardType, regex] of Object.entries(regexPatterns)) {
    if (regex.test(cardNumber)) {
      return cardType;
    }
  }

  return 'Unknown credit card type';
}

console.log(getCardInfo(4781321334789876)); // 'Visa'
console.log(getCardInfo(6011123412341234)); // Discover
console.log(getCardInfo(3566002020360505)); // JCB
console.log(getCardInfo(5412341234123412)); // MasterCard
console.log(getCardInfo(6212345678901234567)); // UnionPay
console.log(getCardInfo(5019123412341234)); //Dankort
