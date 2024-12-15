document.write("Масив випадкових чисел:</br>");
let randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray[i] = Math.random();
    document.write(randomArray[i] + '</br>');
}

document.write("Масив після множення на 10:</br>");
let multipliedArray = randomArray.map(el => el * 10);
multipliedArray.forEach(el => document.write(el + '</br>'));

document.write("Округлені значення:</br>");
multipliedArray.forEach(el => {
    document.write(`Floor: ${Math.floor(el)}, Round: ${Math.round(el)}, Ceil: ${Math.ceil(el)}<br>`);
});
