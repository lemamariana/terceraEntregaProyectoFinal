//definición log
let user;

let lsUser = localStorage.getItem('definedUser');
if (!lsUser) {
    user = prompt("Ingresa tu nombre");
    localStorage.setItem('definedUser', user);
} else {
    user = lsUser;
}

//definición carrito
let cart;

let isCart = localStorage.getItem('cart');
if (!isCart) {
    cart = [];
} else {
    cart = JSON.parse(isCart);
}

//selector cartCount
const cartCounter = $('#cart-counter');
//definición cartcounter
let isCartCounter = localStorage.getItem('cartCounter');
if (!isCartCounter) {
    cartCounter.text("0");
} else {
    cartCounter.text(isCartCounter);
}

//cart content
//selector cartContent
const cartContentNode = $('#modal-body');

let isCartContent = localStorage.getItem('cartContent');
if (!isCartContent) {
    cartContentNode.html("No tienes productos en el carrito")
} else {
    cartContentNode.html(isCartContent);
}

//selector totalPrice
const totalPrice = $('#total-price');

let isTotalPrice = localStorage.getItem('totalPrice');
if (!isTotalPrice) {
    totalPrice.html("")
} else {
    totalPrice.html(isTotalPrice);
}
