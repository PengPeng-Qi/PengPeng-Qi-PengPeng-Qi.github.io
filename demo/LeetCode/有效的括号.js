let isValid = function (s) {
  let stack = [],
    length = s.length;
  if (length % 2) return false;
  for (item of s) {
    // 采取入栈出栈的思路，如果正确入栈则必须出栈
    switch (item) {
      case "{":
      case "[":
      case "(":
        stack.push(item);
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
    }
  }
  // 如果存在多次入栈且无出栈((,则应该返回false
  return !stack.length;
};
console.log(isValid('(('));
