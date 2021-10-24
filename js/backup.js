
/*
//Muestro lista
const chooseItemNumber = () =>{
    let itemList = "Ingresá un producto de la lista: \n";

    for (let index = 0; index < stockProductos.length; index++) {
        itemList += "Código: " + stockProductos[index].id + " "+
                    "Producto: " + stockProductos[index].name + ". " +
                    "Precio: " + stockProductos[index].price + " " +
                    "Stock disponible: " + stockProductos[index].stock + "\n";
                }
    " o escribe 'ESC' para salir";

    return prompt(itemList);
}

//función encontrar item en la lista
const findItemNumber = () => {

    let itemNumber = chooseItemNumber();
    let foundItem = stockProductos.find (product => product.id == itemNumber);
    //valido que sea item de la lista
    while (foundItem == undefined) {
        alert ("Seleccioná un producto de la lista");
        itemNumber = chooseItemNumber();
        foundItem = stockProductos.find (product => product.id == itemNumber);
    }
    alert ("Seleccionaste " + foundItem.name);
    return foundItem;
}
//función elegir cantidad
const chooseQ = (product) => {
    let quantity = prompt ("Ingresá la cantidad deseada");
    //valido que sea número y que exista stock suficiente
    while (isNaN (parseInt (quantity)) || parseInt (quantity) > product.stock) {

        if (isNaN (parseInt(quantity))) {
            alert ("Ingresá un número");
        }
        else {
            alert ("Stock insuficiente");
        }
        quantity = prompt ("Ingresá la cantidad deseada")
    }
    return quantity;
}
//función subtotal
const getSubtotal = (price, quantity) => {
    let subtotalItem = price * quantity;
    return subtotalItem;
}
//función elección de productos
const getOption = () =>{
    let option = prompt ("Deseas agregar más productos? (S/N)");
    while (option.toLowerCase() != "s" && option.toLowerCase() !="n") {
        alert ("Elige una opción correcta");
        option = prompt ("Deseas agregar más productos? (S/N)");
    }
    if (option.toLowerCase() == "n") {
        finish = true;
    }
}
//defino variables globales
let finish = false;
let resume = "";
let total = 0;
//bucle para solicitar información
while (!finish) {
    //declaro variable de producto encontrado
    let foundItem = findItemNumber();
    //declaro variable de cantidad elegida
    let qItem = chooseQ(foundItem);
    //bajo el stock según la cantidad elegida
    foundItem.sale(qItem);
    //salida con resumen de producto
    resume += "Producto: " + foundItem.name + ". Cantidad: " + qItem + " Subtotal: " + getSubtotal(foundItem.price,qItem) + "\n";
    //opción agregar más productos
    getOption();
    //total
    total += getSubtotal(foundItem.price, qItem);
}
//salida por alert de resumen pedido
alert(resume + "Total: " +total);

*/
