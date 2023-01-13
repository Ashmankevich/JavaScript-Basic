/*
Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace,
while ensuring there is exactly one space between each word.
Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str) {
  return str
    .trim()
    .split(" ")
    .map((item, index) => {
      if (item == item && index % 2 !== 0) {
        return item.split("").reverse().join("");
      }
      return item;
    })
    .join(" ");
}
reverse("Reverse this string, please!");
