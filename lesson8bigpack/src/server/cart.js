let add = (cart, request) => {
    console.dir(request.body);
    cart.contents.push (request.body.product);
    return JSON.stringify (cart, null, 4); // 2-й параметр (replacer) (нужен, если не всё нужно сериализовать) массив для сериализации  : null, 3-й параметр отступы (space): 4
}

let plus = (cart, request) => {
    //console.dir(request.body);
    let find  = cart.contents.find (el => el.id_product === +request.params.id);
    find.quantity++; // += request.body.quantity;
    return JSON.stringify (cart, null, 4);
}

let minus = (cart, request) => {
    let find  = cart.contents.find (el => el.id_product === +request.params.id);
    find.quantity--; // += request.body.quantity;
    return JSON.stringify (cart, null, 4);
}


let del = (cart, request) => {
    let find  = cart.contents.find (el => el.id_product === +request.body.product.id_product);
    console.dir(cart.contents.indexOf(find));
    cart.contents.splice(cart.contents.indexOf(find), 1);
    //console.dir(cart.contents.indexOf(find));
    return JSON.stringify (cart, null, 4);
}




module.exports = {
    add, plus, minus, del
}