// Create name array
const name = ['john', 'doe'];
// Create hello function
function hello(parameterOne, parameterTwo) {
  return `hello ${parameterOne} ${parameterTwo}`;
}

console.log(hello(...name));
