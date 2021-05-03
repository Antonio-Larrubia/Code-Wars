// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
  let i= 0;
  let newStr = ''
  let numStr = ''
  while (i < strng.length) {
    if (strng.charAt(i).toLowerCase() >= 'a' && strng.charAt(i).toLowerCase() <= 'z') {
      newStr += strng.charAt(i)
    }
    else {
      numStr += strng.charAt(i)
    }
    i++
  }

  if (!numStr) {
    newStr += '1'
  }
  else {
    newStr += (parseInt(numStr,10)+1).toString().padStart(numStr.length,"0")
  }
  return newStr;
}

Test.assertEquals(incrementString("foobar000"), "foobar001");
Test.assertEquals(incrementString("foo"), "foo1");
Test.assertEquals(incrementString("foobar001"), "foobar002");
Test.assertEquals(incrementString("foobar99"), "foobar100");
Test.assertEquals(incrementString("foobar099"), "foobar100");
Test.assertEquals(incrementString(""), "1");