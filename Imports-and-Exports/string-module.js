const reverse = (str) => {
  return str.split("").reverse().join("");
}

const capFirst = (str) => {
  let arr = [];
  str.split(" ").forEach((el, i) => {
    arr.push(el[0].toUpperCase() + el.slice(1));
  })
  return arr.join(" ");
}

const isPalindrome = (str) => {
  return str.split("").reverse().join("") === str;
}

module.exports = {
  reverse,
  capFirst,
  isPalindrome
}
