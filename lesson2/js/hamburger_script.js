'use strict';
// можно было обойтись и без параметров в конструкторе
// просто попытка сделать универсальнее...
var myHumburger = new Hamburger('big', 'price', 'calorie');

// слушатель кликов по форме
document.getElementById('form').addEventListener('change', (e) => {
    e = e || event;
    var target = e.target || e.srcElement;

    console.log(target);
    console.log(target.id);

    // проверяем, выбран ли (true или false)
    var checkedYes = target.checked;

    if (target.id == 'big' || target.id == 'small') {
        myHumburger.setSize(target.id);
    } else {
        if (checkedYes) {
            myHumburger.addStuff(target.id);

        } else myHumburger.delStuff(target.id);
    }


    myHumburger.calc();
    console.log(checkedYes);
    e.preventDefault();
});


// слушатель кнопки "осчистить"
document.getElementById('form').addEventListener('submit', (e) => {
    myHumburger.resetCalc();
    document.getElementById('form').reset();
    e.preventDefault();
});