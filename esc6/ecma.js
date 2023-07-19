//ex1
const compareObjects = (obj1, obj2) => {
    // Get the entries of the first object
    const entries = Object.entries(obj1);
  
    // Iterate through the entries
    for (const [key, value] of entries) {
      // Check if the second object has the key
      if (obj2.hasOwnProperty(key)) {
        // Check if the values are not equal
        if (value !== obj2[key]) {
          return false;
        }
      }
    }
  
    // All property values are equal or the second object does not contain any additional properties
    return true;
  };
  
  // Example usage:
  const obj1 = { name: 'John', age: 25, city: 'New York' };
  const obj2 = { name: 'John', age: 25, city: 'New York' };
  const obj3 = { name: 'John', age: 30, city: 'New York' };
  
  console.log(compareObjects(obj1, obj2));  // Output: true (obj1 and obj2 have equivalent property values)
  console.log(compareObjects(obj1, obj3));  // Output: false (obj1 and obj3 have different age values)
///ex2
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text to clipboard:", err);
      });
  }
  
  // Example usage:
  var stringToCopy = "Hello, world!";
  copyToClipboard(stringToCopy);
  function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    console.log("Text copied to clipboard");
  }
  
  // Example usage:
  var stringToCopy = "Hello, world!";
  copyToClipboard(stringToCopy);
  ///ex3
  const csvToArray = (csvString) => {
    const rows = csvString.split('\n');
  
    const result = rows.map((row) => row.split(','));
  
    return result;
  };
  
  // Example usage:
  const csvString = "John,Doe,30\nJane,Smith,25\nTom,Johnson,35";
  const csvArray = csvToArray(csvString);
  console.log(csvArray);
/////  ex4//
const csvToObjects = (csvString) => {
    const rows = csvString.split('\n');
    const titles = rows[0].split(',');
  
    const result = rows.slice(1).map((row) => {
      const values = row.split(',');
      const obj = {};
  
      titles.forEach((title, index) => {
        obj[title] = values[index];
      });
  
      return obj;
    });
  
    return result;
  };
  
  // Example usage:
  const csvStringe = "Name,Age,City\nJohn,30,New York\nJane,25,Los Angeles\nTom,35,Chicago";
  const csvObjects = csvToObjects(csvStringe);
  console.log(csvObjects);
  ///ex5
  const objectsToCsv = (data, columns) => {
    const headers = columns.join(',');
    const rows = data.map((obj) => columns.map((col) => obj[col]));
    const csvStringi = [headers, ...rows].map((row) => row.join(',')).join('\n');
    return csvStringi;
  };
  
  // Example usage:
  const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Tom', age: 35, city: 'Chicago' }
  ];
  const columns = ['name', 'city'];
  const csvStringi = objectsToCsv(data, columns);
  console.log(csvStringi);
  ///ex6
  const findValueByKey = (obj, key) => {
    let result = null;
  
    const search = (obj, key) => {
      for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (prop === key) {
            result = obj[prop];
            return;
          } else if (typeof obj[prop] === 'object') {
            search(obj[prop], key);
          }
        }
      }
    };
  
    search(obj, key);
    return result;
  };
  
  // Example usage:
  const jsonData = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
      postalCode: '12345'
    },
    hobbies: ['reading', 'coding', 'gaming']
  };
  
  const keyToFind = 'city';
  const value = findValueByKey(jsonData, keyToFind);
  console.log(value);
  ///ex7
  const numberToDigitsArray = (number) => {
    const digitsString = [...String(number)];
    const digitsArray = digitsString.map(Number);
    return digitsArray;
  };
  
  // Example usage:
  const number = 123456;
  const digits = numberToDigitsArray(number);
  console.log(digits);
  ///ex8
  const filterOutValues = (array, valuesToFilter) => {
    const filteredArray = array.filter((value) => !valuesToFilter.includes(value));
    return filteredArray;
  };
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 6];
  const valuesToFilter = [2, 4, 6];
  const filteredArray = filterOutValues(array, valuesToFilter);
  console.log(filteredArray);
//ex9
const combineNumbers = (array) => {
    const combinations = [];
  
    const combine = (currentCombination, remainingNumbers) => {
      if (remainingNumbers.length === 0) {
        combinations.push(currentCombination);
        return;
      }
  
      const [firstNumber, ...restNumbers] = remainingNumbers;
  
      combine([...currentCombination, firstNumber], restNumbers);
      combine(currentCombination, restNumbers);
    };
  
    combine([], array);
    return combinations;
  };
  
  // Example usage:
  const numbers = [1, 2, 3];
  const numberCombinations = combineNumbers(numbers);
  console.log(numberCombinations);
///ex10
const extractValuesAtIndexes = (arra, indexes) => {
    const extractedValues = indexes.map((index) => arra[index]);
    return extractedValues;
  };
  
  // Example usage:
  const arra = ['a', 'b', 'c', 'd', 'e'];
  const indexes = [1, 3, 4];
  const extractedValues = extractValuesAtIndexes(arra, indexes);
  console.log(extractedValues);
  
  
  
  
  
    