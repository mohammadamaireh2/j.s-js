function doubleValues(array) {
    var doubledArray = [];
  
    array.forEach(function(value) {
      doubledArray.push(value * 2);
    });
  
    return doubledArray;
  }
  
  console.log(doubleValues([1, 2, 3]));           // Output: [2, 4, 6]
  console.log(doubleValues([5, 1, 2, 3, 10]));    // Output: [10, 2, 4, 6, 20]
///ex2
function onlyEvenValues(array) {
    var evenArray = [];
  
    array.forEach(function(value) {
      if (value % 2 === 0) {
        evenArray.push(value);
      }
    });
  
    return evenArray;
  }
  
  console.log(onlyEvenValues([1, 2, 3]));           // Output: [2]
  console.log(onlyEvenValues([5, 1, 2, 3, 10]));    // Output: [2, 10]
///ex3
function showFirstAndLast(array) {
    var result = [];
  
    array.forEach(function(string) {
      var firstChar = string[0];
      var lastChar = string[string.length - 1];
      var newString = firstChar + lastChar;
      result.push(newString);
    });
  
    return result;
  }
  
  console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']));       // Output: ['ct', 'mt', 'tm', 'uy']
  console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));            // Output: ['hi', 'ge', 'se']
////ex4
function addKeyAndValue(array, key, value) {
    array.forEach(function(object) {
      object[key] = value;
    });
  
    return array;
  }
  
  var objects = [
    { name: 'Elie' },
    { name: 'Tim' },
    { name: 'Matt' },
    { name: 'Colt' }
  ];
  
  console.log(addKeyAndValue(objects, 'title', 'instructor'));
  ///ex5
  function vowelCount(str) {
    var vowels = 'aeiou';
    var result = {};
  
    str.toLowerCase().split('').forEach(function(char) {
      if (vowels.indexOf(char) !== -1) {
        if (result[char]) {
          result[char]++;
        } else {
          result[char] = 1;
        }
      }
    });
  
    return result;
  }
  
  console.log(vowelCount('Elie'));                               // Output: { e: 2, i: 1 }
  console.log(vowelCount('Tim'));                                // Output: { i: 1 }
  console.log(vowelCount('Matt'));                               // Output: { a: 1 }
  console.log(vowelCount('hmmm'));                               // Output: {}
  console.log(vowelCount('I Am awesome and so are you'));        // Output: { i: 1, a: 4, e: 3, o: 3, u: 1 }
/// finish///
  
  