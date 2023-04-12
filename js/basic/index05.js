const fruit = ['apple','orange','banana'];
console.log(fruit);
console.log(fruit[0],fruit[1],fruit[2]);
//약식
console.log(...fruit);


function obj(a,b,c){
    // return {a:a,b:b,c:c}
    return {a,b,c}
}

console.log(obj(1,2,3));
console.log(obj(fruit));
console.log(obj(fruit[0],fruit[1],fruit[2]));
console.log(obj(...fruit))

// const word = [1,2,3,4,5,6,7];
// const myWord = function(a,b,c,...d){
//     return {a,b,c,d}
// }

// const myWord = {1,2,3,4,5,6,7} => (a,b,c,...d){
//     return {a,b,c,d};
// }

const word = [1,2,3,4,5,6,7];
// const myWord = (a,b,c,...d) => {return {a,b,c,d}}
const myWord = (a,b,c,...d) => ({a,b,c,d})

console.log(myWord(...word));

// console.log(myWord(...word))