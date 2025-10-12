function reverseString(str) {
  let stack = [];

  // push all characters
  for (let char of str) {
    stack.push(char);
  }

  let reversed = "";

  // pop all characters
  while (stack.length > 0) {
    reversed += stack.pop();
  }

  return reversed;
}

console.log(reverseString("thayub")); // HSETAKNEV

