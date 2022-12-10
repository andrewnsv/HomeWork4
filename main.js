// 1. Создайте массив и Выведите информацию о типе каждого элемента в консоли. Если элемент это число, прибавте к нему 3

const arr = ['455', 87.15, true, undefined, 7, null, 'false', [], {}];

for(let el of arr){
    console.log(typeof el);
    if(typeof el === 'number'){
        console.log(el + 3);
    }
}

//Методом .map

const newArr = arr.map((el) => typeof el === 'number' ? el + 3 : typeof el).join(' ');

console.log(newArr);


/*2. Напишите программу, которая спрашивает у пользователя целое число. Создайте массив из случайных элементов, длинной в это число. Случайные чиcла должны быть в диапазоне 0 до 10. 
Используйте методы Math.random() и Math.floor() для реализации.
Выведите содержимое массива консоль.
Скопируйте массив в новый массив. Каждый третий элемент нового массива умножте на 3.
Выведите содержимое нового массива в консоли. Подсказака. ПОМНИТЕ ПРО ССЫЛКИ НА МАССИВ ПРИ КОПИРОВАНИИ;) Object.assign([], arr)*/

const inputValue = prompt('Enter the number');
const arrayOfNum = [];

for(let i = 0; i < inputValue.length; i++){
    arrayOfNum.push((Math.floor(Math.random(i) * 10)));
}
console.log(arrayOfNum);

// Возращает новый масив где каждый 3 элемент умножаем на 3; 

const filterArr = arrayOfNum.map((item, index) => ((index+1)%3) === 0 ? item * 3 : item);

console.log(filterArr);


/*3. Создайте объект student1 со свойствами firstName, lastName и mark;
Скопируйте объект student1 в новый объект student2 с помощью spread оператора ( ... ) и измените значение mark;
Скопируйте объект student1 в новый объект student3 с помощью Object.assign() и измените значение mark;
Посчитайте среднюю оценку по группе (тоесть между 3я новыми объектами)
Просто получить значения свойства mark у каждого студента через точку или []
Выведите полученные результаты в консоль.
Отобразите все ключи и значения объекта student1 в виде:
ключ - значение
ключ - значение
Используя цыкл*/

const student1 = {
    firstName: 'Alex',
    lastName: 'Abobus',
    mark: 12
}

const student2 = {...student1};
student2.mark = 11;

const student3 = Object.assign({},student1);
student3.mark = 10;

averageMark = (student1.mark + student2.mark + student3.mark) / 3;

console.log(`Средний бал группы ${averageMark}`);
console.log(student1.mark,student2.mark,student3.mark) // Значение mark 

for(let value in student1){
    console.log(`key = ${value}, value = ${student1[value]}`);
}