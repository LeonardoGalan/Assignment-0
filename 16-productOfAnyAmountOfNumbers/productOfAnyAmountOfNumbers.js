function productOfAnyAmountOfNumbers(...args) {
  let totalProduct = 1;

for(let i = 0; i<args.length;i++){
  totalProduct *= args[i];
}
return totalProduct;

}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;