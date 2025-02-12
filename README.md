# Card Validator and Brand Identifier

This project is a simple JavaScript utility designed to validate credit card numbers and identify their corresponding brands based on industry-standard patterns.

## 🎯 Objective

The main purpose of this code is to:

1. **✅ Validate Card Numbers:** Ensure that a given card number is valid using the Luhn algorithm.
2. **🔍 Identify Card Brand:** Recognize the brand (Visa, MasterCard, American Express, Discover, Diners Club) based on predefined patterns.

## ⚙️ How It Works

The code consists of two main functions:

### 1. `validateCardNumber(cardNumber)`
This function uses the **Luhn algorithm** to validate the card number. The algorithm checks whether the card number adheres to a specific checksum rule, which is commonly used to validate credit cards.

- **📥 Input:** A string representing the card number.
- **📤 Output:** A boolean (`true` if valid, `false` if invalid).

### 2. `identifyCardBrand(cardNumber)`
This function matches the card number against regular expressions for each supported brand:

- **💳 Visa:** Starts with 4 and has 13 or 16 digits.
- **💳 MasterCard:** Starts with digits between 51-55 and has 16 digits.
- **💳 American Express:** Starts with 34 or 37 and has 15 digits.
- **💳 Discover:** Starts with 6011, 65, or 622126-622925.
- **💳 Diners Club:** Starts with 300-305, 36, or 38 and has 14 digits.

- **📥 Input:** A string representing the card number.
- **📤 Output:** A string representing the card brand or "Unknown" if the brand is not recognized.

### 3. `validateAndIdentifyCard(cardNumber)`
This function combines the above two functions to both validate the card and identify its brand:

- **✅ If valid:** Returns the identified card brand.
- **❌ If invalid:** Returns "Invalid card number."

## 📚 Usage

Here are some test cases demonstrating how the code works:

```javascript
console.log(validateAndIdentifyCard("4111111111111111")); // Visa
console.log(validateAndIdentifyCard("5555555555554444")); // MasterCard
console.log(validateAndIdentifyCard("378282246310005"));  // American Express
console.log(validateAndIdentifyCard("6011111111111117")); // Discover
console.log(validateAndIdentifyCard("30569309025904"));   // Diners Club
console.log(validateAndIdentifyCard("1234567890123456")); // Invalid card number
```

## 🏦 Supported Brands

The current implementation supports the following credit card brands:

- Visa
- MasterCard
- American Express
- Discover
- Diners Club

## 🚀 Expansion

To add more card brands, simply extend the `patterns` array in the `identifyCardBrand` function with the appropriate regular expressions.

## 📄 License

This project is free to use and modify as needed.

