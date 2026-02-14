function finalScore(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    return "Invalid";
  }

  var right = obj.right;
  var wrong = obj.wrong;
  var skip = obj.skip;

  if (
    typeof right !== "number" ||
    typeof wrong !== "number" ||
    typeof skip !== "number"
  ) {
    return "Invalid";
  }

  var total = right + wrong + skip;

  if (total !== 100) {
    return "Invalid";
  }

  var score = right * 1 - wrong * 0.5 + skip * 0;

  return Math.round(score);
}
