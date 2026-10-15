console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
  // Array with 6 favorite foods listed
let favoriteFoods = ["Brownies", "Pasta", "Pizza", "Donuts", "Cookies", "Sandwiches"];


// 2. Loop through the list and print: "One of my favorite foods is ______."
  // for loop listing all six items in favorite foods array
for (let i = 0; i <= favoriteFoods.length; i++) {
  console.log("One of my favorite foods is " + favoriteFoods[i]);
}



// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
  // Six prints listing where each item in favorite foods array ranks
console.log("My #1 favorite food is Donuts");
console.log("My #2 favorite food is Pasta");
console.log("My #3 favorite food is Pizza");
console.log("My #4 favorite food is Brownies");
console.log("My #5 favorite food is Cookies");
console.log("My #6 favorite food is Sandwiches");


// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."
      // Function that prints three statements regarding food recommendations. Takes 1 parameter foodName (string)
function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me - " + foodName + " is delicious.");
}


// 4b. Call the function at least 3 times
  // Calls printFoodRecommendation function three times
printFoodRecommendation("Donuts");
printFoodRecommendation("Brownies");
printFoodRecommendation("Pizza");


// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" would not be included, but "Donuts" would be.
  //



// 6. Store the result in an array called foodsWithA. Print out the array.



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.



// 8. Create another array shortFoodNames for foods 6 characters or shorter.



// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."


// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
