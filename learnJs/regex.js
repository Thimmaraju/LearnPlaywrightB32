const { cpSync } = require("fs");

x = "3487t5rhjnkjerehfjmekvn3ir0924789342oi4j2i748923"


// y = "798J8978av7876ascri6876pt56*^&%$"

// word = y.replace(/^[0-9]/g, "")


// console.log(word)

y = "798J8978av7876ascri6876pt56*^&%$"

word = y.replace(/[^0-9]/g, "");


console.log(word);


price = "₹16,483".replace("₹", "").replace(",", "");

console.log(price)