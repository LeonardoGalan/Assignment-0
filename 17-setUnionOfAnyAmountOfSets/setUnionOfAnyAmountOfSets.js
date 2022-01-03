function setUnionOfAnyAmountOfSets(...args) {

  let unionSet = new Set();
  
  for(let i = 0; i < args.length; i++) {
    for(let n of args[i]){   
      unionSet.add(n);
    }

    }

  return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;