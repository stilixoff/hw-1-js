let priceApple = 15.678;
let pricePich = 123.965;
let priceOrange = 90.2345;

// Используя встроенный объект Math – выведите максимальное число
let maxSum = Math.max(priceApple, pricePich, priceOrange);
console.log(maxSum + 'грн');


// Используя встроенный объект Math – выведите минимальное число
let minSum = Math.min(priceApple, priceOrange, pricePich);
console.log(minSum + 'грн');


// Сложите стоимость всех товаров, поместите её в переменную и выведите эту сумму
let priceAllProducts = priceOrange + priceApple + pricePich;
console.log(priceAllProducts + 'грн');


// Сложите только целую часть стоимости всех товаров (представьте что мы решили упразднить копейки в наших товарах) и выведите это значение. Округление использовать в МЕНЬШУЮ сторону.
let roundingPriceAllProducts = (Math.floor(priceApple)) + (Math.floor(pricePich)) + (Math.floor(priceOrange))
console.log(roundingPriceAllProducts + 'грн');


//Выведите сумму товаров округленную до сотен. (Например если получилось 260, то выведите 300)
let roundingToHundredsPriceAllProducts = Math.round(priceAllProducts / 100) * 100;
console.log(roundingToHundredsPriceAllProducts + 'грн');


//Выведите булевое значение: является сумма всех товаров (округленная в меньшую сторону) четным или нечетным числом?
priceAllProducts = Math.floor(priceAllProducts);
if (priceAllProducts % 2 === 0) {
    console.log(true)
}   else {
    console.log(false)
}

//Выведите сумму сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн.
let change = 500 - (priceApple + priceOrange + pricePich);
console.log(change + 'грн');

//Выведите среднее значение цен, округленное до второго знака после запятой
let midlePrice = ((priceApple + priceOrange + pricePich) / 3).toFixed(2);
console.log(midlePrice + 'грн');

//(Более сложное) Создайте переменную, в которой сохраним случайную скидку (используйте функцию Math.random).
let discount = ((Math.random()).toFixed(2)) * 100;
console.log(discount + '%');


// Сделайте клиенту случайную скидку и выведите сумму к оплате округленную до 2 знака после запятой.
let discountPricePich = pricePich * ((100 - discount) / 100);
console.log((discountPricePich).toFixed(2));


/* Выведите упущенную выгоду, если клиент заплатил со скидкой, если себестоиомсть товаров ровно в два раза ниже их цены?
(Пример: цена была 260.66, скидка составила 10%, клиент заплатил на 26 меньше, себестоимость = 260 / 2 -> 130. Упущенная выгода 130 - 26 -> 104) */
let costPrice = pricePich / 2;

let lostProfit = (costPrice - discountPricePich).toFixed(2);