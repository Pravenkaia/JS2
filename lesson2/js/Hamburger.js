'use strict';
class Hamburger {

    // можно было обойтись и без параметров в конструкторе
    // просто попытка сделать универсальнее...
    constructor(size = 'big', stuff = 'cheese', idPrice = 'price', idCalorie = 'calorie') {

        //// обязательное значение, значение по умолчанию
        this.sizeDefault = size;

        //// обязательное значение, значение по умолчанию
        this.stuffingDefault = [stuff];

        this.size = size;
        this.stuffing = [stuff];

        // id  куда вставлять суммарную цену
        this.idPrice = idPrice;
        // id  куда вставлять суммарную калорийность
        this.idCalorie = idCalorie;

        //сразу выводим цену и калории для значений по умолчанию
        //this.render(idPrice, HAMBURGER_PRICE[this.size].price);
        //this.render(idCalorie, HAMBURGER_PRICE[this.size].cal);
        this.calc();

    }

    setSize(size) {
        this.size = size;
        console.log(this.size);
    }

    addStuff(stuff) {
        this.stuffing.push(stuff);
        console.log(this.stuffing);
    }

    delStuff(stuff) {
        var id = this.stuffing.indexOf(stuff);
        console.log(id);
        if (id != -1) {
            this.stuffing.splice(id, 1);
        }

        console.log(this.stuffing);
    }

    getSum() {
        var sumSum = 0;
        var filling = 0;
        sumSum += HAMBURGER_PRICE[this.size].price;

        this.stuffing.forEach((item) => {
            sumSum += HAMBURGER_PRICE[item].price;
            if (HAMBURGER_PRICE[item].filling) {
                filling++;
            }
        });
        console.log(`Начинок:  + ${filling}`);
        if (filling == 0) alert('Добавьте начинку!');
        return sumSum;
    }

    getCalorie() {
        var sumCalorie = 0;
        sumCalorie += HAMBURGER_PRICE[this.size].cal;

        this.stuffing.forEach((item) => {
            sumCalorie += HAMBURGER_PRICE[item].cal;
        });
        return sumCalorie;
    }

    calc() {
        //var sum = this.getSum();
        //вызываем метод render
        this.render(this.idPrice, this.getSum());
        this.render(this.idCalorie, this.getCalorie());
    }


    render(id, result) {
        document.getElementById(id).innerHTML = result;
    }

    reset() {
        this.size = this.sizeDefault;
        this.stuffing = this.stuffingDefault;
    }

    resetCalc() {
        this.reset();
        this.calc();
    }


}
