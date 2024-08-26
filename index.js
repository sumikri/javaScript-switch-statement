let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("You chose an apple.");
    break;
  case "banana":
    console.log("You chose a banana.");
    break;
  case "orange":
    console.log("You chose an orange.");
    break;
  default:
    console.log("Unknown fruit.");
}








let num1 = 10;
let num2 = 5;
let operation = "multiply";

switch (operation) {
  case "add":
    console.log(`Result: ${num1 + num2}`);
    break;
  case "subtract":
    console.log(`Result: ${num1 - num2}`);
    break;
  case "multiply":
    console.log(`Result: ${num1 * num2}`);
    break;
  case "divide":
    if (num2 !== 0) {
      console.log(`Result: ${num1 / num2}`);
    } else {
      console.log("Error: Cannot divide by zero.");
    }
    break;
  default:
    console.log("Invalid operation.");
}
