// function bigFunc (nebismieri){
//    let newArray = [];
//    let result = nebismieri.filter(num => num > 0);
//    newArray.push(result);

// //  let oddArray = newArray.filter(odds => (odds % 2) == 1)
// let newestArray = [];
//     for(let i = 0; i > newArray.length; i++) {
//         if((i % 2) == 1) {
//             return newestArray.push(Math.pow(i, 2))
//         } else if((i % 2) == 0) {
//             return newestArray.push(i / 2)

//         }
//     }
//    return newArray;
// }

// rame = [5,  6, 'bb',2, 4, 7, 'nope', 'why', 'im', 'doing', 'this'];
// ramekide = [10, 5, "bla"]
// bigFunc(rame)
// bigFunc(ramekide)

// console.log(bigFunc(rame))


let arrSecond = [4, 5, 11, 2, 9, 99, 1092, 1 ];
let rame = arrSecond.sort(function(a, b) {
    return a - b;
  });
  console.log(rame,);

  const groupNumbers = (arr) => {
      let evenNumbers = arr.filter(number => number % 2 == 0);
      return evenNumbers;
    }
    
    console.log(groupNumbers(rame));

function summFunc (x, y){
    return x +y   
}
console.log(rame.reduce(summFunc));


