// const data = [
//     { id: 'e1', title: 'wre', description: "adas", age: 21 },
//     { id: 'e2', title: 'lorem', description: "adas asdasd asdasdas", age: 21 },
//     { id: 'e3', title: 'sadsa', description: "adas asdasd", age: 21 },
//     { id: 'e4', title: 'lorem', description: "adas", age: 21 },
// ];

// const newObj = {};

// data.forEach((item) => {
//     for(let key in item) {
//         if(!newObj[key]) {
//             newObj[key] = [item[key]]
//         }else if(newObj[key]){
//             newObj[key] = newObj[key].concat(item[key])
//         }
//     }
// })

// for(let key in newObj) {
//     const countObj = {};
//     newObj[key].forEach((item) => {
//         if(!countObj[item]) {
//             countObj[item] = 1
//         }else if(countObj[item]){
//             countObj[item] += 1
//         }
//     });
    
//     let maxCount = 0;
//     for(let i in countObj) {
//         if(countObj[i] > maxCount){
//             maxCount = countObj[i];
//             newObj[key] = i;
//         }
//     };
// };

// console.log(newObj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const reverseString = (str) => {
//     const arr = str.split("");
//     const reversedArr = arr.toReversed();
//     return reversedArr.join("");
// };  

// console.log(reverseString("apple"));


/* ------------------------------------------------------------------------------------------------------------------- */


// const isPalindrome = (str) => {
//     const halfStr1 = str.slice(0, Math.ceil(str.length / 2));
//     const halfStr2 = str.substr(Math.floor(Math.abs(str.length / 2)));

//     return halfStr1 === halfStr2.split("").toReversed().join("");
// };  

// console.log(isPalindrome("aabbaa"));


/* ------------------------------------------------------------------------------------------------------------------- */


// const reverseInteger = (num) => {
//     if(num < 0) {
//         const newNum = Math.abs(num);
//         const str = newNum.toString();
//         const reversedStr = str.split("").toReversed().join("");

//         return -Number(reversedStr)
//     }

//     const str = num.toString();
//     const reversedStr = str.split("").toReversed().join("");

//     return Number(reversedStr);

// };

// console.log(reverseInteger(-204980));


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', title: 'wre', description: "adas", age: 21 },
//     { id: 'e2', title: 'lorem', description: "adas asdasd asdasdas", age: 21 },
//     { id: 'e3', title: 'sadsa', description: "adas asdasd", age: 21 },
//     { id: 'e4', title: 'lorem', description: "adas", age: 21 },
// ];

// const newArr = data.map((item) => {    
//     const {id,description,age} = item;

//     return { id, description, age, name: 'Ilkin' }
// });

// console.log(newArr);
// console.log(data);


/* ------------------------------------------------------------------------------------------------------------------- */


// const getFlatArray = (arr, n) => {
//     let newArr = [];

//     for(let i=0; i<Math.ceil(arr.length/n); i++) {
//         const pieceArr = arr.slice(i*n, (i+1)*n);
//         newArr.push(pieceArr);
//     }

//     return newArr;
// };

// console.log(getFlatArray([1,4,12,3,2,5,-9,0], 7));


/* ------------------------------------------------------------------------------------------------------------------- */


// const isAnagram = (str1, str2) => {
//     if (str1.length !== str2.length) return false;

//     const sortStr = (str) => str.split("").sort().join("");

//     return sortStr(str1) === sortStr(str2);
// };

// console.log(isAnagram("bab", "aba")); 


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', title: 'wre', description: "adas", age: 21, address: { city: 'New York' } },
//     { id: 'e2', title: 'lorem', description: "adas asdasd asdasdas", age: 11, address: { city: 'San Francisco' } },
//     { id: 'e3', title: 'sadsa', description: "adas asdasd", age: 13, address: { city: 'Chicago' } },
//     { id: 'e4', title: 'lorem', description: "adas", age: 27, address: { city: 'Los Angeles' } },
// ];


// const newObj = data.reduce((acc, item) => {
//     acc[item.id] = item.title;
//     return acc;
// }, {});

// console.log(newObj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data2 = [
//     { id: 'e1', name: 'John', age: 17 },
//     { id: 'e2', name: 'Jane', age: 22 },
//     { id: 'e3', name: 'Jim', age: 15 },
//     { id: 'e4', name: 'Jill', age: 30 },
// ];

// data2.sort((a,b) => a.age - b.age);

// console.log(data2);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', name: 'John', age: 21 },
//     { id: 'e2', name: 'Jane', age: 22 },
//     { id: 'e3', name: 'Jim', age: 21 },
//     { id: 'e4', name: 'Jill', age: 30 },
// ];

// const newObj = data.reduce((acc, item) => {
//     const { age } = item;
//     acc[age] = data.filter((item) => item.age === age);
//     return acc;
// }, {});

// console.log(newObj);

// RESULT must be


/* ------------------------------------------------------------------------------------------------------------------- */


// const arr1 = [
//     { id: 'e1', name: 'John', age: 17 },
//     { id: 'e2', name: 'Jane', age: 22 },
// ];

// const arr2 = [
//     { id: 'e1', address: '123 Main St', phone: '123-456-7890' },
//     { id: 'e3', name: 'Jim', age: 15 },
// ];

// const mergeArrays = (a1, a2) => {
//     const resultArr = arr1.reduce((acc,item1) => {
//         const { id } = item1;

//         const findedIndex = arr2.findIndex((item) => item.id === id);

//         if(findedIndex !== -1) {
//             acc[findedIndex] = {...acc[findedIndex], ...item1}
//         }else{
//             acc.push(item1)
//         }

//         return acc;
//     }, [...arr2]);

//     return resultArr;
// };

// console.log(mergeArrays(arr1, arr2));


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', title: 'Developer', age: 25 },
//     { id: 'e2', title: 'Designer', age: 30 },
//     { id: 'e3', title: 'Developer', age: 35 },
//     { id: 'e4', title: 'Manager', age: 40 },
//     { id: 'e5', title: 'Designer', age: 28 },
// ];

// const calculateAverageAgeByGroup = () => {
//     const countObj = {};

//     const newObj = data.reduce((acc, item) => {
//         const { title, age } = item;

//         if(!acc[title]) {
//             countObj[title] = 1;
//             acc[title] = age;
//         }else if(acc[title]) {
//             countObj[title] += 1;
//             acc[title] = (acc[title] + age) / countObj[title];
//         }

//         return acc;
//     }, {}); 

//     return newObj;
// };

// console.log(calculateAverageAgeByGroup(data));


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', name: 'John', address: { city: 'New York', zip: '10001' } },
//     { id: 'e2', name: 'Jane', address: { city: 'San Francisco', zip: '94101' } },
// ];

// const flattenedData = data.map((item) => {
//     const { address } = item;
//     const newObj = {};

//     for(let key in item) {
//         if(key !== 'address') {
//             newObj[key] = item[key];
//         }else if(key === 'address'){
//             for(let key2 in address) {
//                 newObj[`${key}.${key2}`] = `${address[key2]}`;
//             }
//         }
//     }

//     return newObj;
// });

// console.log(flattenedData);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = {
//     id: 'e1',
//     name: 'John',
//     address: {
//         city: 'New York',
//         zip: '10001',
//         coordinates: {
//             lat: 40.7128,
//             lng: -74.0060,
//         },
//     },
// };


// const getValueByPath = (obj, path) => {
//     const arr = path.split('.');

//     const result = arr.reduce((acc, part) => { 
//         if(acc) {
//             return acc[part]
//         }
//     }, obj)

//     return result;
// };

// console.log(getValueByPath(data, 'address.city')); // Output: 'New York'
// console.log(getValueByPath(data, 'address.coordinates.lat')); // Output: 40.7128
// console.log(getValueByPath(data, 'address.country')); // Output: undefined


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', name: 'John', age: 17 },
//     { id: 'e2', name: 'Jane', age: 22 },
//     { id: 'e3', name: 'Jim', age: 15 },
//     { id: 'e4', name: 'Jill', age: 30 },
// ];

// const keyedObject = data.reduce((acc,item) => {
//     const { id } = item;

//     acc[id] = { ...item };

//     return acc;
// }, {});

// console.log(keyedObject);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', name: 'John', age: 17 },
//     { id: 'e2', name: 'Jane', age: 22 },
//     { id: 'e3', name: 'Jim', age: 15 },
//     { id: 'e4', name: 'Jill', age: 30 },
// ];

// const replaceValue = (arr, key, oldValue, newValue) => {
//     const findedObject = arr.find((item) => item[key] === oldValue);
//     findedObject[key] = newValue;

//     return arr;
// };

// const newArr = replaceValue(data, 'age', 22, 23);

// console.log(newArr);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 'e1', category: 'Fruit', type: 'Apple' },
//     { id: 'e2', category: 'Fruit', type: 'Orange' },
//     { id: 'e3', category: 'Vegetable', type: 'Carrot' },
//     { id: 'e4', category: 'Fruit', type: 'Apple' },
//     { id: 'e5', category: 'Vegetable', type: 'Broccoli' },
// ];

// const groupBy = data.reduce((obj, item) => {
//     const { category } = item;

//     if(category === 'Fruit'){
//         const filteredFruit = data.filter((item2) => item2.category === 'Fruit');
//         obj[category] = [...filteredFruit];
//     }else if(category === 'Vegetable'){
//         const filteredVegetable = data.filter((item2) => item2.category === 'Vegetable');
//         obj[category] = [...filteredVegetable];
//     }

//     return obj;
// }, {});

// console.log(groupBy);

/* ------------------------------------------------------------------------------------------------------------------- */


// const chunkArray = (arr, size) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// };

// const data = [1, 2, 3];
// console.log(chunkArray(data, 2)); 


/* ------------------------------------------------------------------------------------------------------------------- */


// const nestedArray = [1, [2, [3, [4, [5]]]]];

// const flattenArray = (arr) => {
//     const newArr = arr.reduce((flat, toFlatten) => {
//         if (Array.isArray(toFlatten)) {
//             flat = flat.concat(flattenArray(toFlatten));
//         } else {
//             flat.push(toFlatten);
//         }
//         return flat;
//     }, []);
//     return newArr;
// };

// console.log(flattenArray(nestedArray));  


/* ------------------------------------------------------------------------------------------------------------------- */


// const arr = [
//     { id: 't1', typ: 'Income', amont: 100 },
//     { id: 't2', typ: 'Expense', amont: 50 },
//     { id: 't3', typ: 'Income', amont: 200 },
//     { id: 't4', typ: 'Expense', amont: 150 },
//     { id: 't5', typ: 'Income', amont: 300 },
// ];

// const obj = arr.reduce((acc,item) => {
//     const { typ } = item;

//     if(!acc[typ]) {
//         acc[typ] = {
//             count: 1,
//             totalAmount: item.amont
//         };
//     }else{
//         acc[typ] = {
//             count: acc[typ].count + 1,
//             totalAmount: acc[typ].totalAmount + item.amont
//         };
//     }

//     return acc;
// }, {});

// console.log(obj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const items = [
//     { id: 'a1', value: 10 },
//     { id: 'a2', value: 20 },
//     { id: 'a1', value: 10 },
//     { id: 'a3', value: 30 },
//     { id: 'a2', value: 20 },
// ];

// const filteredArr = items.reduce((arr,item) => {
//     const { id } = item;

//     const findedIndex = arr.find((item) => item.id === id);

//     if(!findedIndex) {
//         arr.push(item)
//     }

//     return arr;
// }, []);

// console.log(filteredArr);


/* ------------------------------------------------------------------------------------------------------------------- */


// const people = [
//     { name: 'John', age: 25, city: 'New York' },
//     { name: 'Jane', age: 22, city: 'San Francisco' },
//     { name: 'John', age: 30, city: 'Chicago' },
//     { name: 'Jane', age: 22, city: 'New York' },
// ];

// people.sort((a, b) => {
//     if (a.name === b.name) {
//         return a.age - b.age;
//     }
//     return a.name.localeCompare(b.name);
// });

// console.log(people);


/* ------------------------------------------------------------------------------------------------------------------- */


// const arr1 = [
//     { id: '1', value: 'A' },
//     { id: '2', value: 'B' },
//     { id: '3', value: 'C' },
// ];

// const arr2 = [
//     { id: '2', value: 'X' },
//     { id: '3', value: 'Y' },
//     { id: '4', value: 'Z' },
// ];

// const mergedArr = arr2.reduce((totalArr, item) => {
//     const { id } = item;

//     const findedIndex = totalArr.find((item2) => item2.id === id);

//     if(!findedIndex) {
//         totalArr.push(item)
//     }

//     return totalArr;

// }, [...arr1]);

// console.log(mergedArr);


/* ------------------------------------------------------------------------------------------------------------------- */


// const products = [
//     { id: 'p1', name: 'Laptop', price: 1000 },
//     { id: 'p2', name: 'Phone', price: 500 },
//     { id: 'p3', name: 'Tablet', price: 300 },
// ];

// const affordableProducts = products.filter((item) => {
//     if(item.price <= 500) {
//         return item
//     } 
// }).map((item) => {
//     return {
//         ...item,
//         discount: 10
//     }
// });

// console.log(affordableProducts);


/* ------------------------------------------------------------------------------------------------------------------- */


// const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const obj = words.reduce((acc, item) => {
//     if(!acc[item]) acc[item] = 1;
//     else acc[item] += 1;

//     return acc;
// }, {});

// console.log(obj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { id: 1, details: { name: 'John', age: 25 } },
//     { id: 2, details: { name: 'Jane', age: 22 } },
//     { id: 3, details: { name: 'Jake', age: 30 } },
// ];

// const newArr = data.map((item) => {
//     return item.details.name
// });

// console.log(newArr);


/* ------------------------------------------------------------------------------------------------------------------- */


// var mergeTwoLists = function(list1, list2) {
//     const newArr = list1;
//     let min = Infinity;
//     const lastArr = [];

//     for(let i=0; i<list2.length; i++){
//         newArr.push(list2[i])
//     }

//     for(let j = 0; j<newArr.length; j++){
//         for(let k = 0; k<newArr.length; k++){
//             if(newArr[k] > newArr[k+1]){
//                 const temp = newArr[k];
//                 newArr[k] = newArr[k+1];
//                 newArr[k+1] = temp;
//             }
//         }
//     }

//     return newArr;

// };

// console.log(mergeTwoLists([1,2,4],[1,3,4]));


/* ------------------------------------------------------------------------------------------------------------------- */


// const obj1 = { a: 1, b: { c: 2, d: 3 } };
// const obj2 = { b: { c: 3, e: 4 }, f: 5 };

// const mergedObj = (o1, o2) => {
//     for(let key1 in o1) {
//         if(!o2[key1]){
//             o2[key1] = o1[key1];
//         }else{
//             mergedObj(o1[key1], o2[key1]);
//         }
//     }

//     return o2;
// };

// console.log(mergedObj(obj1, obj2));


/* ------------------------------------------------------------------------------------------------------------------- */


// const mergeObj = (str, value) => {
//     const arr = str.split(".");
//     const obj = {};
//     let current = obj

//     for(let i=0; i<arr.length; i++) {
//         if(i === arr.length - 1) { 
//             current[arr[i]] = value;
//         }else{
//             current[arr[i]] = {};
//             current = current[arr[i]]; 
//         }
//     }

//     return obj;
// };

// console.log(mergeObj("b.c", 2));


/* ------------------------------------------------------------------------------------------------------------------- */


// const obj = { a: 1, b: 2, c: 3 };

// const arr = Object.keys(obj);

// const transformedObj = arr.reduce((acc, item) => {
//     acc[item] = Number(obj[item]) * 2;
//     return acc;
// }, {}); 

// console.log(transformedObj)


/* ------------------------------------------------------------------------------------------------------------------- */


// const keys = ['a', 'b', 'c'];
// const values = [1, 2, 3];

// const resultObj = keys.reduce((acc,item,index) => {
//     acc[item] = values[index]

//     return acc;
// }, {});

// console.log(resultObj); 


/* ------------------------------------------------------------------------------------------------------------------- */


// const objectToQueryString = (params) => {
//     let query = "";

//     for(let key in params) {
//         query += `${key}=${params[key]}&`;
//     }

//     let arr = query.split("");
//     arr.pop();
//     let newStr = arr.join("");

//     return newStr;
// };

// const obj = { search: 'test', page: 1, size: 20 };

// console.log(objectToQueryString(obj));


/* ------------------------------------------------------------------------------------------------------------------- */


// const data = [
//     { name: 'Alice', group: 'A' },
//     { name: 'Bob', group: 'B' },
//     { name: 'Charlie', group: 'A' },
// ];

// const obj = data.reduce((acc,item) => {
//     const { group } = item;

//     if(!acc[group]) {
//         acc[group] = [{ ...item }]
//     }else{
//         acc[group] = [...acc[group], { ...item }]
//     }

//     return acc;
// }, {});

// console.log(obj);


/* ------------------------------------------------------------------------------------------------------------------- */


// const nested = { a: 1, b: { c: 2, d: { e: 3 } } };

// const obj = {};

// function getNestedObj(outerObj, outerKey) {
//     let str = `${outerKey}`;

//     for(let key in outerObj) {
//         if(typeof outerObj[key] === 'object') {
//             str += `.${key}`;
//             getNestedObj(outerObj[key], str);
//         }else{
//             obj[`${str}.${key}`] = outerObj[key];
//         }
//     }
// };

// for(let key in nested) {
//     if(typeof nested[key] === 'object') {
//         getNestedObj(nested[key], key);
//     }else{  
//         obj[key] = nested[key];
//     }
// }

// console.log(obj);


/* ------------------------------------------------------------------------------------------------------------------- */