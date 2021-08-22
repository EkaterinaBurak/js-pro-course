// №1
// Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9].

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let squaredNumbers = numbers.map(item => Math.pow(item, 2))
console.log(squaredNumbers);

// №2 
// Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function arraySum(array){
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
}
arraySum(array);

//№3
//Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

let num = prompt('Введите число');
function colonOdd (num) {
  let str = num.toString();
  let result = [str[0]];
  for(var i=1; i<str.length; i++) {
      if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
        result.push(':', str[i]);
       }
      else {
        result.push(str[i]);
      }
  }
  return result.join('');  
}

console.log(colonOdd(num));

//№4
//Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов.
let arr1 = [1,2,3,4,5];
let arr2 = [6,7.8];
let arr3 = [];
  if (arr1.length > arr2.length) {
    var count = arr1.length;
  } else {
    var count = arr2.length;
  }
      for (let i = 0; i < count; i++) {
        if (arr2[i] === undefined) {
            arr2.push(0);
        } else {
            if (arr1[i] === undefined) {
              arr1.push(0);
            }
        }
        arr3.push(arr1[i] - arr2[i]);
      }
console.log(arr3); 

//№5
//Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
let arr1 = [1,2,3,4,5];
let arr2 = [6,7.8];
let arr3 = [];
  if (arr1.length > arr2.length) {
    var count = arr1.length;
  } else {
    var count = arr2.length;
  }
      for (let i = 0; i < count; i++) {
        if (arr2[i] === undefined) {
            arr2.push(0);
        } else {
            if (arr1[i] === undefined) {
              arr1.push(0);
            }
        }
        arr3.push(arr1[i] + arr2[i]);
      }
console.log(arr3); 

//№6
//Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

let array = [1, 2, 3]
function reverseArray(array) {
    return array.reverse()
}
let newArray = reverseArray(array)
console.log (array);

//№7
//Фильтр юзеров Создать массив объектов для юзеров. Пример:

//[{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
//Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.
let users = [
    {name: 'Ivan', age: 18},
    {name: 'Petr', age: 12},
    {name: 'Sidor', age: 25},
    {name: 'Anya', age: 17},
    {name: 'Max', age: 55},
]

adultUsers = []
notAdultUsers = []

function printUsers(users) {
    users.forEach(item => item.age >= 18 ? adultUsers.push(item) : notAdultUsers.push(item))
}
printUsers(users);
console.log (adultUsers);
console.log (notAdultUsers);

//№8
//Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива.

let array = [1, 2, 3, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 10, 10]
let newArray = array.filter ((item, index) => array.indexOf(item) === index);

console.log (newArray);

// №9 
// Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ)

function isPalindrome(string) {
    let stringLength = string.length,
        stringReverse = string.split('').reverse().join(''); 
    if (stringReverse === string) {
      return 'yes';
    } else {
      return 'no';
    }
  }

 isPalindrome('привет');
 isPalindrome('шалаш');

  console.log(isPalindrome('привет'));
  console.log( isPalindrome('шалаш'));

//№10
//Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать!)

// №11 
// Написать функцию search, которая принимает первым аргументом массив имен:
// [ ‘Ivan’, ‘Petr’, ‘Sidor’, ...]
// и любую произвольную строку. Функция должна отфильтровать массив в зависимости от строки (в независимости от регистра). Например:

// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'si') -> ['Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’], 'i') -> [‘Ivan’,'Sidor']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTr') -> [‘Petr’,'Petric']
// search([‘Ivan’, ‘Petr’, ‘Sidor’, 'Petric'], 'eTrooo') -> []

// №12 
// Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет. Пример:

// checkIsEqaul([1,2,3], [1,2,3]) -> true
// checkIsEqaul([1,2,3], [1,2,3,4]) -> false
// checkIsEqaul([1,2,3], [1,'2',3]) -> false

function checkIsEqual(arr1, arr2) {
    let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length
    for(let i = 0; i <= maxLength; i++) {
        if(arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
};
 
