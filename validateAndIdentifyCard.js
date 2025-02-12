function identifyCardBrand(cardNumber) {
    const patterns = [
      { brand: "Visa", regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
      { brand: "MasterCard", regex: /^5[1-5][0-9]{14}$/ },
      { brand: "American Express", regex: /^3[47][0-9]{13}$/ },
      { brand: "Discover", regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
      { brand: "Diners Club", regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ }
    ];
  
    for (const { brand, regex } of patterns) {
      if (regex.test(cardNumber)) {
        return brand;
      }
    }
  
    return "Unknown";
  }
  
  function validateCardNumber(cardNumber) {
    if (!/^[0-9]+$/.test(cardNumber)) return false;
  
    let sum = 0;
    let shouldDouble = false;
  
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = cardNumber.charCodeAt(i) - 48;
      if (shouldDouble) {
        digit = digit > 4 ? digit * 2 - 9 : digit * 2;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
  
    return sum % 10 === 0;
  }
  
  function validateAndIdentifyCard(cardNumber) {
    return validateCardNumber(cardNumber) ? identifyCardBrand(cardNumber) : "Invalid card number";
  }
  
  // Test cases
  console.log(validateAndIdentifyCard("4111111111111111")); // Visa
  console.log(validateAndIdentifyCard("5555555555554444")); // MasterCard
  console.log(validateAndIdentifyCard("378282246310005"));  // American Express
  console.log(validateAndIdentifyCard("6011111111111117")); // Discover
  console.log(validateAndIdentifyCard("30569309025904"));   // Diners Club
  console.log(validateAndIdentifyCard("1234567890123456")); // Invalid card number
  
