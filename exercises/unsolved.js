/*
Task 1 👨‍🏫
Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'

Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через alert

Привет, Полина Набережная!
*/

/*
Task 3 💻
Написать функцию trimString которая в качестве аргумента принимает три параметра:

строку
значение от
значение по
После вызова функция должна вернуть переданную строку обрезанную по значениям от и по
*/

/*
Task 4 💻
Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.

Для 2021 это будет 5.
*/

//Task 2 🖥
/*
Даны два одинаковых объекта. Сравните их так чтобы они были равны

    let student1 = {
        name: 'Polina',
        age: 27,
    }

    let student2 = {
        name: 'Polina',
        age: 27,
    }
*/

let student1 = {
  name: "Polina",
  age: 27,
};

let student2 = {
  name: "Polina",
  age: 27,
};

function getEqual(student1, student2) {
  let propOfStudent1;
  let propOfStudent2;

  for (let key in student1) {
    propOfStudent1 = key;
    console.log(propOfStudent1);
  }
  for (let key in student2) {
    propOfStudent2 = key;
    console.log(propOfStudent2);
  }

  if (propOfStudent1 == propOfStudent2) {
    return true;
  }
  return false;
}
getEqual(student1, student2);
