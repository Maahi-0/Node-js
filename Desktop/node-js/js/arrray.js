

let arr = ['muskan', 1, { city: 'indore' }];

for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}
//for each loop

let food = ['rice', 'daal', 'roti', 'mango'];

food.forEach(() => {
    console.log(food);
})

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.forEach(function (nums, index) {
    console.log(nums, index);
})

//arrow operatior

let sum = (a, b) => { return a + b };
console.log(`the use of arrow function`)
console.log(sum(5, 10));