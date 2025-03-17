// Задание 1 //

function deepCopy(obj) { 
    const result = {}; 
    if (typeof obj !== "object"   
        typeof obj === undefined   
        obj === null   
        Array.isArray(obj)   
        typeof obj == "function") { 
        return obj; 
    } 
    const keys = Object.keys(obj); 
    for (let key in keys) { 
        result[keys[key]] = deepCopy(obj[keys[key]]) 
    } 
    return result; 
}

// Задание 2 //

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}


function selectFromInterval(arr, a, b) {
    let resSmaller = arr.slice(a, b + 1);
    let resBigger = arr.slice(b, a + 1);
    if (Math.floor(a) !== a || Math.floor(b) !== b) {
         return "incorrect input parameters!";
    }
    if (!Array.isArray(arr)) {
         return "first parameter must be an array!";
    }
    for (let i of arr) {
         if (typeof i !== 'number') {
              return "There are not only numbers in the array!";
         }
    }
    if (a < b) {
         return resSmaller.sort(compareNumeric);
    } else return resBigger.sort(compareNumeric);
}

// Задание 3 //

const fn = (property) => (item) => console.log(item[property]);

// Задание 4 //

function reverseStr(str) {
    return str.split('').reverse().join('');
}