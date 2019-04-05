const renderGoodsItem = (title = 'title', price = 0, img = 'images/no_photo.png') => `<div class="goods-item"><div class="card"><img  class="card-img-top" alt="${title}" src="${img}"><div class="card-body"><h3 class="card-title"> ${title} </h3><p> ${price} </p></div></div></div>`;


const renderGoodsList = (list = []) => {
    
    document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join(""); //= goodsList;

}

renderGoodsList(GOODS);
