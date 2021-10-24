//Selectores

//selector shop
const shopNode = $("#shop");
//selector greet
const greetNode = $("#greet");
//selector finalizar compra
const finishPurchase = $('#finish-purchase');

//DOM - defino función para mostrar productos disponibles con cards
const showProducts = (array) => {
    array.forEach(stockProductos => {
        //defino estructura interna del div con jQuery
        shopNode.append(`<div style="width:18rem" class= "card mx-3 mt-3"><img src="${stockProductos.img}" alt="${stockProductos.alt}">
        <div class="card-body">
        <h4 class="card-title">${stockProductos.name}</h4>
        <p class="card-text">
        Precio: ${stockProductos.price}
        Stock: ${stockProductos.stock}
        </p>
        <p onclick="addToCart(${stockProductos.id})" class="btn btn-primary">Comprar</a>
        <div id="details">
        <h3 class="btn btn-secondary">Ver detalle</h3>
        <p class="detail"> ${stockProductos.detail}</p>
        </div> 
        </div> </div>`);

    })
}
//DOM - llamo función para mostrar productos
showProducts(stockProductos);

// DOM- muestro saludo
greetNode.text("Hola " + user + "! Estos son los productos que tenemos disponibles:");

//defino funcion agregar al carrito
const addToCart = (itemId) => {

    const productInCart = cart.find((prod) => prod.id === itemId);

    if (productInCart) {

        const validateStock = () => {
            if (productInCart.quantity < productInCart.stock) {

                productInCart.quantity++;
            }
            else {
                alert("No hay suficiente stock del producto seleccionado");
            }
        }
        validateStock();

    } else {

        const cartProduct = stockProductos.find((prod) => prod.id === itemId);

        cart.push({
            id: cartProduct.id,
            name: cartProduct.name,
            price: cartProduct.price,
            stock: cartProduct.stock,
            quantity: cartProduct.quantity,
        })

        console.log(cartProduct);
    }

    console.log(cart);
    refreshCart();

}

//DOM - actualizar carrito
const refreshCart = () => {
    cartContentNode.html(`<div class="row"> 
                                <h3 class="col-4"> Producto </h3> 
                                <h3 class="col-4"> Cantidad </h3> <h3 class="col-4"> Precio </h3>
                                </div>`);

    cart.forEach((prod) => {
        cartContentNode.append(`<div class="cartContent row"> 
        <p class="col">${prod.name}</p> 
        <div class="addDelete col-auto">
        <button onclick="deleteProduct(${prod.id})" class="deleteBtn border"> <i class="fas fa-minus"></i></i></button>
        <p class="border">${prod.quantity}</p>
        <button onclick="addToCart(${prod.id})" class="addBtn border"> <i class="fas fa-plus"></i></i></i></button>
        </div>
        <p class="col price">Precio: $${prod.price * prod.quantity}</p> 
        </div>`
        )
    })

    localStorage.setItem('cartContent', cartContentNode.html());
    cartCounter.text(cart.reduce((acc, prod) => acc += prod.quantity, 0));
    localStorage.setItem('cartCounter', cartCounter.text());
    totalPrice.text("Precio total: $" + cart.reduce((acc, prod) => acc += prod.price * prod.quantity, 0));
    localStorage.setItem('totalPrice', totalPrice.text());
    localStorage.setItem('cart', JSON.stringify(cart));
}

//DOM - funcion eliminar producto
const deleteProduct = (itemID) => {

    const product = cart.find((prod) => prod.id === itemID);

    product.quantity--;

    if (product.quantity === 0) {

        const index = cart.indexOf(product);
        cart.splice(index, 1);

    }
    refreshCart();

    console.log(cart);
}



