//Tasks from 'Learn JavaScript', theme - FUNCTION

function ShowMessage(from, text, word = "miracle") {
  console.log(from + ":" + text + ", " + word);
}

ShowMessage("Julia", "she said she loves him");

//task 1
/*
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор ||
*/

function checkAge(age) {
  return age > 18 ? true : confirm("What your parents are decided?");
}
checkAge(10);

function checkAge(age) {
  return age > 18 || confirm("What your parents are decided?");
}
checkAge(10);

//task 2
/*
Функция min(a, b)
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
*/

function getMinValue(a, b) {
  return a < b ? a : b;
}
getMinValue(3, -1);

//task 3
//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

/*
Функция pow(x,n)

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
*/

let x = +prompt("Please, enter the X", "");
let n = +prompt("Please, enter the N", "");

function pow(x, n) {
  if (n < 0) {
  } else {
    let result = x ** n;
    return console.log(`pow(x, n) = ${result}`);
  }
  return console.log("You should use only natural numbers. Try, please again");
}

pow(x, n);

//task 4 Замените код Function Expression стрелочной функцией:
/*

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "So, are you agree?",
  (Ok = () => alert("You are agree")),
  (No = () => alert("You do not agree"))
);

// Tasks from TMS
// Normal level

//Task 1

/*
Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)
*/

//one way

let getSum = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
getSum(100);

//two way

function getSumTwo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

getSumTwo(100);

//three way

let getSumThree = function (n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};
getSumThree(100);

//Task 2 💻
/*
Напишите функцию, которая в качестве аргумента принимает в себя сумму кредита,
который хочет получить клиент и верните результат переплаты по кредиту:

процентная ставка в год — 17%,
количество лет — 5.
*/

// one way

const YEARS = 20;
const RATE = 20;

function getLoan(cash) {
  let sum = cash * (RATE / 100) * YEARS + cash;
  return sum;
}

getLoan(10000);
console.log(getLoan(10000));

// two way

let getLoanElse = function (cash) {
  let result = cash * (RATE / 100) * YEARS + cash;
  return result;
};

getLoanElse(10000);
console.log(getLoanElse(10000));

//three way

let getLoanAgain = (cash) => (summarize = cash * (RATE / 100) * YEARS + cash);
getLoanAgain(10000);

console.log(getLoanAgain(10000));

/*
Task 5 💻
Написать функцию getSum которая принимает два целых числа a и b, 
которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее.
Если два числа равны, верните a или b.

    getSum(1, 0) == 1   // 1 + 0 = 1
    getSum(1, 2) == 3   // 1 + 2 = 3
    getSum(0, 1) == 1   // 0 + 1 = 1
    getSum(1, 1) == 1   // 1 Since both are same
    getSum(-1, 0) == -1 // -1 + 0 = -1
    getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

//the wrong way

function getNumberOne(a) {
  let sum = 0;
  if (a > 0) {
    for (let i = 0; i <= a; i++) {
      sum += i;
    }
  } else {
    for (let i = 0; i >= a; i--) {
      sum += i;
    }
  }
  return sum;
}

function getNumberTwo(a) {
  let sum = 0;
  if (a > 0) {
    for (let i = 0; i <= a; i++) {
      sum += i;
    }
  } else {
    for (let i = 0; i >= a; i--) {
      sum += i;
    }
  }
  return sum;
}

function getResult(a, b) {
  return a + b;
}
getResult(getNumberOne(-2), getNumberOne(6));

//the right way

function getSum(a, b) {
  let sum = 0;
  if (a < b) {
    for (i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a > b) {
    for (i = a; i >= b; i--) {
      sum += i;
    }
  } else {
    sum = a;
  }
  return sum;
}
getSum(6, -2);

let getSumElse = function (a, b) {
  let sum = 0;
  if (a < b) {
    for (i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a > b) {
    for (i = a; i >= b; i--) {
      sum += i;
    }
  } else {
    sum = a;
  }
  return sum;
};
getSumElse(6, -2);

let getSumOneElse = (a, b) => {
  let sum = 0;
  if (a < b) {
    for (i = a; i <= b; i++) {
      sum += i;
    }
  } else if (a > b) {
    for (i = a; i >= b; i--) {
      sum += i;
    }
  } else {
    sum = a;
  }
  return sum;
};
getSumOneElse(-3, 3);

/*
Task 6 💻
Напишите функцию fooboo которая принимает в качестве аргумента три параметра:

булевое значение
функцию foo которая выводит в консоль свое имя
функцию boo которая выводит в консоль свое имя
Если переданное булевое значение true запускаем функцию foo иначе boo

ADVANCED level

Task 1 👨‍🏫
Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. 
Функция должна возвращать true, если треугольник можно построить со сторонами заданной длины,
и false в любом другом случае.

Task 2 👨‍🏫
Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты.
Каждый квадрат имеет размер 1x1 и не может быть разбит. 
Реализуйте функцию, которая будет возвращать минимальное количество необходимых надломов.
Например, если вам дается плитка шоколада размером 2 x 1, 
вы можете разделить ее на отдельные квадраты всего за один надлом, но для размера 3 x 1 вы должны сделать два надлома.
Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения). Ввод всегда будет неотрицательным целым числом.

Task 3 👨‍🏫
Напишите программу для вычисления общей стоимости покупки телефонов. Вы будете продолжать покупать телефоны (подсказка: циклы!), пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов.
После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.
Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара», также как и переменную для вашего «баланса банковского счета».
Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.
Попробуйте включить ввод данных в вашу программу, например с помощью функции prompt(..). Вы можете, например, запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!
*/
