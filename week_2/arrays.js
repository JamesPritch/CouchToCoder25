// Best practice is to use the same data type for all elements in arrays, here is string
const ingredients = ["chicken", "butter", "salt", "pepper"]; // Using plural variable name implies array
console.log(ingredients);
// Add item to array
ingredients.push("oregano");
console.log(ingredients);
// Remove last item from array
ingredients.pop(); // Note: this returns the value of the last element in the array
console.log(ingredients);
