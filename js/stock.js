//Funcion constructora
class Products {
    constructor(id, name, price, stock, img, alt, detail, quantity) {
        this.id = parseInt(id);
        this.name = name;
        this.price = parseFloat(price);
        this.stock = stock;
        this.img = img;
        this.alt = alt;
        this.detail = detail;
        this.quantity = 1;
    }
    /*Métodos*/
    sale = function (stock) {
        this.stock -= stock;
    }
    replace = function (stock) {
        this.stock += stock;
    }
}
//Declaro array vacío
const stockProductos = [];
//Instancio productos
stockProductos.push(new Products(1, "Torta chocolate", 200, 50, 'images/chocolate.jpg', "Imagen de torta arcoiris", "Detalle torta arcoiris"));
stockProductos.push(new Products(2, "Torta limon", 200, 50, 'images/lemon.jpg', "Imagen de torta arcoiris", "Detalle torta arcoiris"));
stockProductos.push(new Products(3, "Torta oreo", 200, 50, 'images/oreo.jpg', "Imagen de torta arcoiris", "Detalle torta arcoiris"));
stockProductos.push(new Products(4, "Torta arcoiris", 200, 50, 'images/arcoiris.jpg', "Imagen de torta arcoiris", "Detalle torta arcoiris"));
stockProductos.push(new Products(5, "Torta celeste", 200, 50, 'images/celeste.jpg', "Imagen de torta arcoiris", "Detalle torta arcoiris"));
stockProductos.push(new Products(6, "Torta futbol", 200, 50, 'images/bolso.jpg', "Imagen de torta arcoiris", "Detalle torta arcoiris"));
stockProductos.push(new Products(6, "Torta infantil", 200, 50, 'images/fortnite.jpg', "Imagen de torta arcoiris", "Detalle torta arcoiris"));
stockProductos.push(new Products(7, "Postre brownie", 200, 50, 'images/brownie.jpg', "Imagen de Postre arcoiris", "Detalle Postre arcoriris"));
stockProductos.push(new Products(8, "Postre rogel", 200, 50, 'images/rogel.jpg', "Imagen de Postre arcoiris", "Detalle Postre arcoriris"));
stockProductos.push(new Products(9, "Postre brownie", 200, 50, 'images/arcoiris.jpg', "Imagen de Postre arcoiris", "Detalle Postre arcoriris"));
stockProductos.push(new Products(10, "Postre letra", 200, 50, 'images/m.jpg', "Imagen de Postre arcoiris", "Detalle Postre arcoriris"));
stockProductos.push(new Products(11, "Torta números", 200, 50, 'images/arcoiris.jpg', "Imagen de Postre arcoiris", "Detalle Postre arcoriris"));
stockProductos.push(new Products(12, "Desayuno completo para 1", 300, 10, 'images/desayunos.jpg', "Imagen de desayuno", "Detalle desayuno"));
stockProductos.push(new Products(13, "Desayuno completo para 2", 300, 10, 'images/desayunos.jpg', "Imagen de desayuno", "Detalle desayuno"));

