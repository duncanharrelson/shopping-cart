// Coffee: price_1O4rmJHfk6TyDeClLTYv0sSb
// Sunglasses: price_1O4rn5Hfk6TyDeClasbe9Z5z
// Camera:  price_1O4rntHfk6TyDeClybQ2XCHh

const productsArray = [
    {
        id: "price_1O4rmJHfk6TyDeClLTYv0sSb", 
        title: "Coffee", 
        price: 4.99
    },
    {
        id: "price_1O4rn5Hfk6TyDeClasbe9Z5z", 
        title: "Sunglasses", 
        price: 9.99
    },
    {
        id: "price_1O4rntHfk6TyDeClybQ2XCHh", 
        title: "Camera", 
        price: 39.99
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log(`Product data does not exist for ID: ${id}`);
        return undefined;
    } else {
        return productData;
    }
}


export { productsArray, getProductData };