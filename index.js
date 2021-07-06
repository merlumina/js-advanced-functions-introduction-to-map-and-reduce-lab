function mapToNegativize(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] *= -1;
    newArray.push(sourceArray[i]);
  }
  return newArray;
}

function mapToNoChange(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i]);
  }
  return newArray;
}

function mapToDouble(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] *= 2;
    newArray.push(sourceArray[i]);
  }
  return newArray;
}

function mapToSquare(sourceArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] **= 2;
    newArray.push(sourceArray[i]);
  }
  return newArray;
}

function reduceToTotal(sourceArray, runningTotal = 0) {
  for (let i = 0; i < sourceArray.length; i++) {
    runningTotal += sourceArray[i]; 
  }
  return runningTotal;
}

function reduceToAllTrue(sourceArray, truthiness = true) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      truthiness = false;
    }
  }
    return truthiness;
}

function reduceToAnyTrue(sourceArray, truthiness = false) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) {
      truthiness = true;
    }
  }
    return truthiness;
}