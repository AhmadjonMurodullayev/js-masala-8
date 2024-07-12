
// 1.Qiymatlari sonlardan iborat bo’lgan object berilgan.
//  Qiymatlarini n martaga ochiruvchi dastur tuzing
// Input: n = 3,  const obj = {a: 2, b: 3, c: 4}
// Output: const res = {a: 6, b: 9, c: 12}

let obj = { a: 2, b: 3, c: 4 };
let n = 3;
const objDaraja = (obj = {}) => {
  let res = {};
  for (const key in obj) {
    res[key] = obj[key] * n;
  }
  return res;
};
// console.log(objDaraja(obj));

// 2.argument sifatida berilgan string da nechta
// so’zda a harfi ishtirok etganini aniqlaydigan
// function tuzing
let strs = "men dunyoni nima qildim a salom ?";
function namBers(str = "") {
  let str2 = str.split(" ").filter((itme) => itme.includes("a") || itme.includes("A"));
  let res = [...str2];
  return res.length;
}
// console.log(namBers(strs));

// 3.Quyidagi ko’rinishda object lardan tuzilgan array berildi.
//  Agar read property true bo’lsa o’sha kitob o’qigan deb chiqarsin,
//   aks holda o’qilmagan deb chiqarsin

const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    read: false,
  },
  {
    title: "Dunyoning ishlari",
    author: "O’tkir Hoshimov",
    read: true,
  },
  {
    title: "Iymon",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    read: true,
  },
];

const booksMap= books.filter((item) => {
  if (item.read === true) {
    console.log(item.author,  item.title, "kitobi o’qilgan");
  } else {
    console.log(item.author,item.title, "kitobi o’qilmagan");
  }
});



// 4.String lar arrayi berilgan. Shunday object hosil qilinki
//  o’sha object kalitlari array elementlaridan va qiymatlari ularning 
//  uzuligindan iborat bo’lsin
// Input: [”text”, “world”, “laptop”]
// Output: {”text”: 4, “world”: 4, “laptop”: 6}
let arry = ["text", "world", "laptop"]
function nuyuObj(arr){
    let obj = {};
    for(let i = 0; i < arr.length; i++){
        obj[arr[i]] = arr[i].length
    }
    return obj
 }
//  console.log(nuyuObj(arry));


// 5.Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// Output: {dog: 2, chicken: 3, cat: 1, rabbit: 1}

const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];
       let new_arr = animals.reduce((index, item) => {
  if (index[item]) {
           index[item] += 1;
  } else {
                index[item] = 1;
  }
  return index;
}, {});
console.log(new_arr);

// 6.Arraydagi eng yosh va eng qarilarni topib, ularni
//  yoshlarini farqini toping. (sort).
// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54
let map = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

let app = map.sort((a, b) => a.age - b.age);

// 7.Array truthy va falsy elementlardan tuzilgan. O’sha arraydagi
//  truthy va falsy elementlarni alohida arraylarga ajratib object qilib qaytaruvchi
//   getTruthyFalsy funksiya tuzing. (filter)
// Input: [false, 1, 10, "", null, "sultonqul", 1.13, 0]
// Output: {truthy: [1, 10, "sultonqul", 1.13], falsy: [false, "", null, 0]}
let array = [false, 1, 10, "", null, "sultonqul", 1.13, 0];

const numTurue = (array) => {
  let truey = [];
  let falsey = [];
  array.forEach((item) => {
    if (item) {
      truey.push(item);
    } else {
      falsey.push(item);
    }
  });
  return { truey, falsey };
};
// console.log(numTurue(array));



// 8.Gapdagi eng uzun va eng qisqa so’zlarni aniqlab 
// {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi
//  minManWord() nomli function yarating
// Input: “Men dasturlash kursida o’qiyman”
// Output: {minWord: “Men”, maxWord: “dasturlash”}

let str = "Men dasturlash kursida o’qiyman";

const minWord = (str) => {
    let arr = str.split(" ");
  let min = arr[0];
  let max = arr[0];
  arr.forEach((item) => {
    if (item.length < min.length) {
      min = item;
    }
    if (item.length > max.length) {
      max = item;
    }
  });
  return { minWord: min, maxWord: max };
};
// console.log(minWord(str));