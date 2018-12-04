module.exports = {
  // returns the first element of the array
  first(arr) {
    return arr[0];
  }
  // returns the array minus the first item
  tail(arr) {
    return arr.slice(1);
  },
  // returns the last element of the array
  last(arr) {
    return arr[arr.length - 1]
  },
  // returns the sum of array elements
  sum(arr) {
    return arr.reduce((sum, curr) => sum + curr)
  },
  //return a random number between 0 and given number;
  randNum(num) {
    return Math.floor(Math.random() * (num + 1));
  }
  //returns a random element of array
  randEl(arr) {
    return arr[Math.floor(Math.random() * (arr.length + 1))];
  },
  // returns a random key of an object
  key(obj) {
    let arrKeys = Object.keys(obj);
    return arrKeys[module.exports.num(arrKeys.length)];
  }
}
