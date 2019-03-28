//Create Fruits Array
const fruits = ['apple', 'banana'];
//Create Sauces Array
const sauces = ['honey', 'caramel'];
//Create String Word
const midWord = 'and';
// Merge 2 arrays and Add String between 2 arrays after merge
const fruitsSauces = [...fruits, midWord, ...sauces];
// Take a copy from last array and change first index
const newFruitsSauces = fruitsSauces;
newFruitsSauces[0] = 'kiwi'
console.log(fruits);
console.log(newFruitsSauces);
/** Requirements
 * Merge 2 arrays
 * Add String between 2 arrays after merge
 * Take a copy from them and change the first index
**/
