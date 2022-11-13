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
