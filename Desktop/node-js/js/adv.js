//spread operator
let arr1 = [1, 2, 3, 4, 5];

let arr2 = [...arr1, 6, 7, 8, 9];

console.log(arr2);

//promises ,  fetch api

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));