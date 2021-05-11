//Ex1
let ex1 = document.getElementsByTagName('div')[0].firstElementChild;
console.log(ex1);

//Ex2
let ex2 = document.getElementsByTagName('h3')[1]; 
console.log(ex2);

//Ex3
let ex3 = ex2.previousElementSibling;
console.log(ex3);

//Ex4
let ex4 = document.getElementsByTagName('p')[1].nextElementSibling
console.log(ex4);

//Ex5
let ex5 = document.getElementsByTagName('ul')[0]
console.log(ex5);

//Ex6
let ex6 = document.getElementsByTagName('ul')[0].parentElement.firstElementChild

console.log(ex6);

//Ex7
let ex7 = document.getElementsByTagName('ul')[0].getElementsByClassName('important')[3].nextElementSibling
console.log(ex7);

//Ex8
let ex8 = document.getElementsByTagName('p')[3].nextElementSibling.nextElementSibling
console.log(ex8);

//Ex9
let ex9 = document.getElementsByTagName('span')[1].parentElement.nextElementSibling
console.log(ex9);

//Ex10
ex10 = ex9.previousElementSibling.firstElementChild.firstElementChild.innerText
console.log(ex10);

//Ex11
let ex11 = document.querySelector('.grandParagraphe')
console.log(ex11);

//Ex12
let ex12 = document.querySelectorAll('li')
console.log(ex12);
console.log("---");
ex12.forEach(element => {
    console.log(element);
});