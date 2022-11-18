//Functions level 2
/*Complete exercise
NORMAL level
Task 1 🖥
Выведи все элементы массива в консоль с помощью метода forEach

    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
Реализуйте решение двумя способами, используя function declaration & arrow function
*/

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

function getNumbres() {
  return fibonacci.forEach(function callback(item) {
    return console.log(item);
  });
}
getNumbres();

function getNumbresTwo() {
  return fibonacci.forEach((item) => console.log(item));
}
getNumbresTwo();

let getNumbresThree = () => fibonacci.forEach((item) => console.log(item));
getNumbresThree();

//Task 2 🖥
/*Используя метод map создайте новый массив, на основе массива users,
в котором каждый элемент массива будет содержать строку вида:

['member 1: Darya', 'member 2: Masha', ... etc]

    const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
Реализуйте решение двумя способами, используя function declaration & arrow function.
*/

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

function getUsers() {
  return users.map(function callback(item, index) {
    return `member ${index + 1} : ${item}`;
  });
}
getUsers();

function getUsers() {
  return users.map((item, index) => `member ${index + 1} : ${item}`);
}
getUsers();

let getUsers = () =>
  users.map((item, index) => `member ${index + 1} : ${item}`);
getUsers();

//Task 3 🖥
/*С помощью метода filter создайте новый массив в котором не будет отрицательных чисел.

    const numbers = [7, -4, 32, -90, 54, 32, -21]
Реализуйте решение двумя способами, используя function declaration & arrow function.
*/

const numbers = [7, -4, 32, -90, 54, 32, -21];

function getPos() {
  return numbers.filter((item) => item > 0);
}
getPos();

let getPos2 = () => numbers.filter((item) => item > 0);
getPos2();

//Task 4 🖥
/*
Используя метод reduce получите сумму всех чисел массива.

    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
Реализуйте решение двумя способами, используя function declaration & arrow function.
*/

const fibon = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];

function getSum() {
  return fibon.reduce((accum, value) => accum + value);
}
getSum();

let getResult = () => fibon.reduce((accum, value) => accum + value);
getResult();

//Task 5 🖥
/*
Используя метод find найдите в массиве первое четное число.

    const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
Реализуйте решение двумя способами, используя function declaration & arrow function.
*/
const numbersTask5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

function findNum() {
  return numbersTask5.find((item) => (item % 2 == 0 ? item : null));
}
findNum();

let findNum2 = () => numbersTask5.find((item) => (item % 2 == 0 ? item : null));
findNum2();

//ADVANCED level
/*Task 1 👨‍🏫
Написать функцию конструктор Student

В каждом объекте студента должны быть поля salary , rate , name

Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита.

На основе функции создать минимум 5 студентов
 и имя каждого студента должно соответствовать имени студента из вашей группы.

Создать массив students и поместить в него студентов.

Написать функцию которая принимает массив студентов.
И вычисляет общую сумму кредитов которую можно выдать группе.

rate имеет 4 категории A B C D

A - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
B - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
C - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
D - плохой рейтинг и мы не можем дать кредит
*/

function Student(name, salary, rate) {
  this.name = name;
  this.salary = salary;
  this.rate = rate;
  this.getLoan = function () {
    let loan;
    switch (this.rate) {
      case "A":
        loan = salary * 12;
        break;
      case "B":
        loan = salary * 8;
        break;
      case "C":
        loan = salary * 6;
        break;
      default:
        `Sorry, you can't have money`;
    }
    return loan;
  };
}

let student1 = new Student("Karina", 1000, "A");
let student2 = new Student("Andrew", 1000, "B");
let student3 = new Student("Dana", 1000, "B");
let student4 = new Student("Artem", 1000, "A");
let student5 = new Student("Liza", 1000, "C");

let students = [student1, student2, student3, student4, student5];

function getLoanStudents() {
  return students
    .map((item) => item.getLoan())
    .reduce((accum, current) => accum + current);
}
getLoanStudents(students);

/*
Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!
Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
*/

const vowel = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];

function hukTrollo(str) {
  let arrNoVowel = [];
  str
    .split("")
    .map((item) => (vowel.includes(item) ? undefined : arrNoVowel.push(item)));

  return arrNoVowel.join("");
}
hukTrollo("This website is for losers LOL!");

//Task 3 👨‍🏫 Нет истории, нет теории
/*В приведенных ниже примерах показано, как написать функцию:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
Параметр - это строка, которая включает только буквы от a..z и A..Z.
*/

function accum(item) {
  let dash = "-";
  let arr = [];
  let arrOfStr = item.split("");
  for (let i = 0; i < arrOfStr.length; i++) {
    arr.push(dash);
    arr.push(arrOfStr[i].toUpperCase());
    for (let j = 0; j < i; j++) {
      arr.push(arrOfStr[i]);
    }
  }
  return arr.slice(1).join("");
}
accum("RqaEzty");

//Task 4 👨‍🏫 Самый высокий и самый низкий
/*В этом небольшом задании вам дается строка чисел, разделенных пробелами,
 и вы должны возвращать наибольшее и наименьшее число.
    highAndLow("1 2 3 4 5"); // return "5 1"
    highAndLow("1 2 -3 4 5"); // return "5 -3"
    highAndLow("1 9 3 4 -5"); // return "9 -5"
Строка вывода должна состоять из двух чисел, разделенных одним пробелом,
 при этом наибольшее число должно быть первым.
 */

function highAndLow(item) {
  let negArr = [];
  let allElArr = item.split("");

  while (allElArr.includes("-")) {
    let indexMinus = allElArr.indexOf("-");
    let negEl = "-" + allElArr[indexMinus + 1];
    negArr.push(negEl);
    allElArr.splice(indexMinus, 2);
  }
  let arrClean = negArr
    .concat(allElArr)
    .filter((item) => item !== " ")
    .sort((a, b) => b - a);

  return `${arrClean[0]} ${arrClean[arrClean.length - 1]}`;
}
highAndLow("1 9 3 4 -5");

//Task 5 👨‍🏫 Изограммы
/*
Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных.
Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой.
Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.
    isIsogram("Dermatoglyphics") == true
    isIsogram("aba") == false
    isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(item) {
  let str = item.toLowerCase();
  let arr = str.split("");
  let set = new Set();

  for (let key of arr) {
    set.add(key);
  }

  let newArr = Array.from(set.values());
  let strFinal = newArr.join("");
  return str !== strFinal ? `it's not Isogram` : `It's a isogram`;
}
isIsogram("aba");

//Task 6 👨‍🏫 Считаем коды символов
/*Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе,
чтобы создать число. Поместите результат в переменную total1

Затем замените все числа 7 на число 1 и назовите это число total2

После верните разницу между суммой цифр total1 и total2

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
*/

function getMathOfASCII(item) {
  let string = "";

  for (let key of item) {
    let strOfNum = String(key.charCodeAt());
    string += strOfNum;
  }

  let total1 = +string;

  let arrOfTotal1 = Array.from(String(total1));
  arrOfTotal1.map((item, index) =>
    item == "7" ? arrOfTotal1.splice(index, 1, "1") : undefined
  );

  let total2 = +arrOfTotal1.join("");

  return total1 - total2;
}
getMathOfASCII("ABCDEF");

//Task 7 👨‍🏫 Дубликаты
/*
Цель этого упражнения - преобразовать строку в новую строку,
где каждый символ в новой строке равен (,
если этот символ появляется только один раз в исходной строке, или ),
если этот символ встречается более одного раза в исходной строке.
Игнорируйте использование заглавных букв при определении дубликата символа.
    "din" => "((("
    "recede" => "()()()"
    "Success" => ")())())"
    "(( @" => "))(("
*/

//Tasks from 'Learn JS'
/*
Вычислить сумму чисел до данного
важность: 5
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) {}

alert( sumTo(100) ); // 5050
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
*/

function sumTo(value) {
  let result = 0;
  for (let i = 0; i <= value; i++) {
    result += i;
  }
  return result;
}
sumTo(10);

sumTo = (value) => (value == 1 ? 1 : value + sum(value - 1));
sum(10);

sumTo = (value) => (value == 1 ? 1 : value(value + 1) / 2);
sum(10);

/*
Вычислить факториал
важность: 4
Факториал натурального числа – это число, умноженное на "себя минус один",
затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

alert( factorial(5) ); // 120
P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
*/

let factorial = (value) => (value == 1 ? 1 : (value *= factorial(value - 1)));
factorial(5);

/*
Числа Фибоначчи
важность: 5
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

Пример работы:

function fib(n) {}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
P.S. Все запуски функций из примера выше должны работать быстро.
 Вызов fib(77) должен занимать не более доли секунды.
*/

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
fib(7);

/*
Вывод односвязного списка
важность: 5
Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?
*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let one;
  let two;
  let three;
  let four;
  for (let i = 0; i < 1; i++) {
    one = list.value;

    for (let j = 0; j < 1; j++) {
      two = list.next.value;

      for (let m = 0; m < 1; m++) {
        three = list.next.next.value;

        for (let n = 0; n < 1; n++) {
          four = list.next.next.next.value;
        }
      }
    }
  }
  return `${one}, ${two}, ${three}, ${four}`;
}
printList(list);

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}
printList(list);

function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}
printList(list);

/*
Вывод односвязного списка в обратном порядке
важность: 5
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
*/

function printReverse(list) {
  let arr = [];
  let tmp = list;
  let i = 0;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  let arrMod = arr.reverse();
  while (i < arrMod.length) {
    alert(arrMod[i]);
    i++;
  }
}
printReverse(list);
