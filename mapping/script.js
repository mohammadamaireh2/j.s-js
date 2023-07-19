const makeStrings = (people) => {
    return people.map(person => {
      const canGoToMatrix = person.age >= 18 ? "Can go to The Matrix" : "Cannot go to The Matrix";
      return `${person.name}: ${canGoToMatrix}`;
    });
  };
  
  const people = [
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ];
  
  console.log(makeStrings(people));

  /////task 2 /////

  let originalArray = [1, 2, 3, 4, 5];
let doubledArray = originalArray.map(num => num * 2);

console.log("Original Array:", originalArray);
console.log("Doubled Array:", doubledArray);
  
//// task 3////
let numbersArray = [1, 2, 3, 4, 5];

// Convert numbers to strings
let stringsArray = numbersArray.map(num => num.toString());

// Printing the original array and the array of strings
console.log("Original Array:", numbersArray);
console.log("Array of Strings:", stringsArray);
  //// task 4///
  function capitalizeNames(names) {
    return names.map(name => {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
  }
  
  console.log(capitalizeNames(["john", "jacob", "jinGleHeimer", "schmidt"]));
  /// EX5 ///
  function readyToPutInTheDOM(data) {
    var result = [];
  
    for (var i = 0; i < data.length; i++) {
      var name = "<h1>" + data[i].name + "</h1>";
      var age = "<h2>" + data[i].age + "</h2>";
      result.push(name);
      result.push(age);
    }
  
    return result;
  }
  
  var testData = [
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ];
  
  console.log(readyToPutInTheDOM(testData));
  ////EX6///
  function doubleValues(array) {
    var doubledArray = [];
  
    for (var i = 0; i < array.length; i++) {
      doubledArray.push(array[i] * 2);
    }
  
    return doubledArray;
  }
  
  console.log(doubleValues([1, 2, 3]));      // Output: [2, 4, 6]
  console.log(doubleValues([1, -2, -3]));   // Output: [2, -4, -6]
  ////EX7///
  function valTimesIndex(array) {
    var result = [];
  
    for (var i = 0; i < array.length; i++) {
      result.push(array[i] * i);
    }
  
    return result;
  }
  
  console.log(valTimesIndex([1, 2, 3]));      // Output: [0, 2, 6]
  console.log(valTimesIndex([1, -2, -3]));   // Output: [0, -2, -6]
  ///EX8
  function extractKey(array, key) {
    var result = [];
  
    for (var i = 0; i < array.length; i++) {
      result.push(array[i][key]);
    }
  
    return result;
  }
  
  var objects = [
    { name: 'Elie' },
    { name: 'Tim' },
    { name: 'Matt' },
    { name: 'Colt' }
  ];
  
  console.log(extractKey(objects, 'name')); // Output: ['Elie', 'Tim', 'Matt', 'Colt']
///EX9
function extractFullName(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    var fullName = array[i].first + ' ' + array[i].last;
    result.push(fullName);
  }

  return result;
}

var objects = [
  { first: 'Elie', last: 'Schoppik' },
  { first: 'Tim', last: 'Garcia' },
  { first: 'Matt', last: 'Lane' },
  { first: 'Colt', last: 'Steele' }
];

console.log(extractFullName(objects)); // Output: ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
///FINISH
  
  
  
  