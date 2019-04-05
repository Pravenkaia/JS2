function renderGoodsItem(title, price) {
    var title = title || 'title';
    var price = price || 0;
    return '<div class="goods-item"><h3> ' + title + '</h3><p>' + price + '</p></div>';
}

function renderGoodsList(list) {
    var list = (list.length > 0) ? list : [];
    // объявляю переменные области видимости функций.  
    // Зато легче читать код. Всё равно умрут после выполнения функции.
    // имитирую библиотечную функцию. Могу для разных проектов настроить переменные (в частности, задать название класса нужного селектора)
    var divClass = '.goods-list';

    // ищем в DOM селектор 
    var divForItems = document.querySelector(divClass);


    // содержимое селектора. Получаем массив. Можно сразу слить в строку, а я это сделаю позже для лушей читаемости
    var divForItemsConent = list.map(function (item) {
        return renderGoodsItem(item.title, item.price);
    });

    //console.log(divForItemsConent); 

    // содержимое селектора. 
    // Сливаем сначала массив в строку 
    // (если не слить, интерпретатор преобразует массив в строку сам, но с запятыми, т.е. происходит приведение типов перменных по-джаваскриптовски (встроенные метод toString для массива))

    divForItems.innerHTML = divForItemsConent.join("");

}

renderGoodsList(GOODS);
