function analyzeText(text) {
  if (typeof text !== "string") {
    return "Invalid";
  }

  if (text.length === 0) {
    return "Invalid";
  }

  var words = text.split(" ");
  var longestWord = "";
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }

  var tokens = text.split(" ").join("").length;

  return {
    longwords: longestWord,
    token: tokens
  };
}
