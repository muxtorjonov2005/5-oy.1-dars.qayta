// 1-masala
// const info = ["Ali", 30, "Toshkent"];

// let [name, age, city] = info


// 2-masala
// const colors = ["red", "green", "blue", "yellow", "purple"];

// let [color1, color2, ...colors2] = colors


// 3-masala
// function firstAndLast(arr) {
//     let [first,,, last] = arr
//     return [first, last]
// }
// const result = firstAndLast([10, 20, 30, 40]);
// console.log(result) 


// 4-masala
// const numbers = [1, 2, 3, 4, 5, 6];
// let [,num2,,, num5] = numbers



// 1-masala
// const book = {
//     title: "JavaScript for Beginners",
//     author: "John Doe",
//     year: 2021
//   }

//   let {title, author} = book


// 2-masala
// const location = {
//     city: "Toshkent",
//     coordinates: {
//       latitude: 41.2995,
//       longitude: 69.2401
//     }
//   }
// let {coordinates : {latitude, longitude} } = location
// console.log(latitude);


// 3-masala
// const person = {
//     firstName: "Ali",
//     lastName: "Valiyev",
//     age: 28
//   };

//   let {firstName: name, lastName: surname, age: born} = person


// 4-masala
// const settings = {
//     theme: "dark",
//     language: "uz"
//   };

//   let {theme, language, mode = 'online', fontSize = 46} = settings
 


// 1-masala
// function configure(options) {
//     const { host = "localhost", port = 8080, protocol = "http" } = options;
//     console.log(`Connecting to ${protocol}://${host}:${port}`);
//   }

// configure({ host: "127.0.0.1" })


// 2-masala
// function combineAndExtract(arr1, arr2) {
//     const combined = [...arr1, ...arr2]
//     const [first, second, ...rest] = combined
//     return {
//         first,
//         second,
//         rest
//     }
// }
// const result = combineAndExtract([1, 2], [3, 4, 5])
// console.log(result);



// 1-masala
// function sumOddArr(arg){
//     let res = 0
//     for(let i = 0; i < arg.length; i++){
//         if(arg[i] % 2 == 1){
//             res += arg[i]
//         }
//     }
//     return res
// }
// console.log(sumOddArr([1, 2, 3, 4, 5]));

// 1-masala
// function sumOddArr(arg){
//     let res = 0
//     for(const i of arg){
//         if(i % 2 == 1){
//             res += i
//         }
//     }
//     return res
// }
// console.log(sumOddArr([1, 2, 3, 4, 5]));

// 1-masala
// function sumOddArr(arg){
//     let res = 0
//     arg.forEach(val => {
//         if(val % 2 == 1){
//             res += val
//         }
//     })
//     return res
// }
// console.log(sumOddArr([1, 2, 3, 4, 5]));


// 2-masala
// function findMinNum(arg){
//     let min = arg[0]
//     for (const i of arg) {
//         if(min > i){
//             min = i
//         }
//     }
//     return min
// }
// console.log(findMinNum([12, 45, 3, 98, 4]));

// 2-masala
// function findMinNum(arg){
//     let min = arg[0]
//     for (let i = 0; i < arg.length; i++) {
//         if(min > arg[i]){
//             min = arg[i]
//         }
//     }
//     return min
// }
// console.log(findMinNum([12, 45, 3, 98, 4]));

// 3-masala
// function findMinNum(arg){
//     let min = arg[0]
//     arg.forEach(val => {
//         if(val < min){
//             min = val
//         }
//     })
//     return min
// }
// console.log(findMinNum([12, 45, 3, 98, 4]));


// 3-masala
// function filterNumber(str){
//     let arr = str.split('')
//     let res = []
//     arr.forEach(val => {
//         if(val > 0){
//             res.push(val)
//         }
//     })
//     return res
// }
// console.log(filterNumber('1salo0m 4'));

// // 3-masala
// function filterNumber(str){
//     return str.split('').filter(val => val > 0)
// }
// console.log(filterNumber('1salo0m 4'));

// 3-masala
// function filterNumber(str){
//     let res = []
//     for (const i of str) {
//         if(i > 0){
//             res.push(i)
//         }
//     }
//     return res
// }
// console.log(filterNumber('1salo0m 4'));


// 4-masala
// function findKvadrat(num){
//     let res = num ** 2
//     return res 
// }
// console.log(findKvadrat(4));

// 4-masala
// function findKvadrat(num){
//     return Math.pow(num, 2) 
// }
// console.log(findKvadrat(4));

// 4-masala
// function findKvadrat(num){
//     return num * num
// }
// console.log(findKvadrat(4));


// 7-masala
// function findkub(num){
//     return Math.pow(num, 3)
// }
// console.log(findkub(3));

// 7-masala
// function findkub(num){
    // return num ** 3
// }
// console.log(findkub(3));

// 7-masala
// const kubFind = num => num * num * num
// console.log(kubFind(3));


// 5-masala
// function teskariQilishSozni(str){
//     return str.split(' ').map(val => val.split('').reverse().join('')).join(' ')
// }
// console.log(teskariQilishSozni('salom bolalar'));

// 6-masala
// function teskariQilishSozni(str){
//     let res = []
//     let arr = str.split(' ')
//     for(let i = 0; i < arr.length; i++){
//         let word = arr[i].split('').reverse().join('')
//         res.push(word)
//     }
//     return res.join(' ')
// }
// console.log(teskariQilishSozni('salom bolalar'));

// 5-masala
// function teskariSozlar(matn) {
//     let teskariSozlar = [];
//     let soz = "";
//     for (let i = 0; i < matn.length; i++) {
//         if (matn[i] === " ") {
//             teskariSozlar.push(soz.split("").reverse().join(""));
//             soz = "";
//         } else {
//             soz += matn[i];
//         }
//     }
//     teskariSozlar.push(soz.split("").reverse().join(""))
//     return teskariSozlar.join(" ");
// }
// console.log(teskariSozlar('salom bolalar'));


// 6-masala
// function sanashXarflarni(str){
//     let res = 0
//     for(let i = 0; i< str.length; i++){
//         if(str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z'){
//             res++
//         }
//     }
//     return res
// }
// console.log(sanashXarflarni('Salom bolalar'));

// 6-masala
// function sanashXarflarni(str){
//     let res = 0
//     for(const i of str){
//         if(i >= 'a' && i <= 'z' || i >= 'A' && i <= 'Z'){
//             res++
//         }
//     }
//     return res
// }
// console.log(sanashXarflarni('Salom bolalar'));

// 6-masala
// function solishtirish(belgi){
//     return (belgi >= 'a' && belgi <= 'z' || belgi >= 'A' && belgi <= 'Z')
// }
// function sanashXarflarni(str){
//     return str.split('').filter(solishtirish).length
// }
// console.log(sanashXarflarni('salom Bolalar'));


// 8-masala


// // 9-masala
// function ortaArifmetTop(arg){
//     let sum = 0
//     for (const i of arg) {
//         sum += i
//     }
//     return Math.trunc(sum / arg.length)
// }
// console.log(ortaArifmetTop([2, 8, 5, 15]));

// 9-masala
// function ortaArifmetTop(arg){
//         const yigindi = arg.reduce((sum, qiymat, index, array) => {
//             sum += qiymat;
//             if (index === array.length - 1) {
//                 return Math.trunc(sum / array.length)
//             }
//             return sum
//         }, 0)
//         return yigindi
// }
// console.log(ortaArifmetTop([2, 8, 15, 5]));

// 9-masala
// const ortaArifmetTop = arg => {
//     let res = 0
//     for (const i of arg) {
//         res += i
//     }
//     return Math.trunc(res / arg.length)
// }
// console.log(ortaArifmetTop([12, 8, 3, 7]));


// 10-masala
// function berilganSozniOchirish(str, word){
//     return str.replaceAll(word, '')
// }
// console.log(berilganSozniOchirish('salom dunyo', 'yo'));

// 10-masala
// function berilganSozniOchirish(text, word) {
//     let index = text.indexOf(word);
//     if (index !== -1) {
//         return text.substring(0, index) + text.substring(index + word.length);
//     }
//     return text
// }
// console.log(berilganSozniOchirish('salom dunyo', 'yo'))

// 10-masala
function berilganSozniOchirish(str,word){
    return str.split(word).join('')
}
console.log(berilganSozniOchirish('salom dunyo', 'yo'));


