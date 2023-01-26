"use strict";
// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years, myDog, quests
// Функции: dogYears, makeTea, secret
// Встроенные функции: я не нашел тут, не очень понял что тут должно быть
// Аргументы: myDog, 4, quests, 'Earl Grey'
// Параметры: dogname, age, cups, tea
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();

// Дана строка 'JS'. Сделайте из нее строку 'js'.
console.log("Ответ на задание № 2");
let text = "JS";
console.log(text.toLocaleLowerCase());

// Дана строка 'я люблю JS!'. Вырежите из нее слово
// 'люблю' и слово 'javascript' тремя разными способами
// (через substr, substring, slice).
console.log("Ответ на задание № 3");
text = "я люблю JS!";
console.log(text.substr(2, 8));
console.log(text.slice(2, 10));
console.log(text.substring(2, 10));

// Дана строка 'я люблю JS!'. Найдите позицию
// подстроки 'люблю'.
console.log("Ответ на задание № 4");
text = "я люблю JS!";
console.log(text.indexOf("люблю"));
// Дана переменная txt, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему
// принципу: если количество символов этого текста больше
// заданного в переменной n, то в переменную result запишем
// первые n символов строки txt и добавим в конец
// троеточие '...'. В противном случае в переменную
// result запишем содержимое переменной txt.
console.log("Ответ на задание № 5");
let txt = "Я стараюсь изучать JavaScript",
  n = "Веселуха",
  result = "";
if (txt.length > n.length) {
  result = txt.substr(0, n.length);
} else {
  result = txt;
}
console.log(result);
// Для решения задач данного блока вам понадобятся следующие
// методы: replace.
// Дана строка 'Я-люблю-JS!'.
// Замените все  '-' на '!' с помощью глобального
// поиска и замены.
console.log("Ответ на задание № 6");
text = "Я-люблю-JS!";
console.log(text.replace(/-/g, "!"));
// Дана строка 'я люблю JS'. С помощью метода split
// запишите каждое слово этой строки в отдельный элемент
// массива.
console.log("Ответ на задание № 7");
text = "я люблю JS";
console.log(text.split(" "));
// Дана строка 'привет мир'. С помощью метода split
// запишите каждый символ этой строки в отдельный элемент
// массива.
console.log("Ответ на задание № 8");
text = "привет мир";
console.log(text.split(""));

console.log(parseInt("1000", 2));
