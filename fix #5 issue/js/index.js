// Create fruits array
const fruits = ['apple', 'banana', 'orange', 'pineapple'];
// Create function take 2 parameters
function restFruits (firstFruit, ...otherFruits)  {
  return `${firstFruit} ${otherFruits}`;
}

console.log(restFruits(fruits))
