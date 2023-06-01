class Product {
    constructor(id, name, price, desc, tags, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.tags = tags;
        this.image = image;
    }
}

export const products = [
    new Product(1,"Camiseta para Perro moderna", 25000, "Dale a tu perro un aspecto moderno con esta camiseta.", ["perro", "camiseta", "ropa"], "/src/assets/images/products/camiseta-perro.jpg"),
    new Product(2, "Suéter para Perro", 45000, "Mantén a tu amigo peludo abrigado con este suéter acogedor para perros.", ["perro", "suéter", "abrigo", "ropa"], "/src/assets/images/products/sueter-perro.jpg"),
    new Product(3, "Hoodie para Perro", 55000, "Dale a tu perro un aspecto moderno con esta sudadera con capucha.", ["perro", "hoodie", "sudadera", "ropa"], "/src/assets/images/products/hoodie-perro.jpg"),
    new Product(4, "Camisa para Perro", 35000, "Dale a tu perro un aspecto elegante con esta camisa.", ["perro", "camisa", "ropa"], "/src/assets/images/products/camisa-perro.jpg"),
    new Product(5, "Abrigo Impermeable para Perro", 75000, "Protege a tu perro de la lluvia con este abrigo impermeable de alta calidad.", ["perro", "abrigo", "ropa", "impermeable"], "/src/assets/images/products/abrigo-impermeable-perro.jpg"),
    new Product(6, "Abrigo para Perro", 65000, "Mantén a tu perro abrigado con este abrigo de alta calidad.", ["perro", "abrigo", "ropa"], "/src/assets/images/products/abrigo-perro.jpg"),
    new Product(7, "Vestido Elegante para Perro", 42000, "Viste a tu perrito con estilo con este hermoso vestido elegante.", ["perro", "vestido", "ropa"], "/src/assets/images/products/vestido-perro.jpg"),
    new Product(8, "Chaqueta de Mezclilla para Perro", 68000, "Dale a tu perro un look casual con esta chaqueta de mezclilla de moda.", ["perro", "chaqueta", "mezclilla", "ropa"], "/src/assets/images/products/chaqueta-mezclilla-perro.jpg"),
    new Product(9, "Chaqueta para Perro", 55000, "Dale a tu perro un look casual con esta chaqueta de moda.", ["perro", "chaqueta", "ropa"], "/src/assets/images/products/chaqueta-perro.jpg"),
    new Product(10, "Chaqueta de Cuero para Perro", 75000, "Dale a tu perro un look casual con esta chaqueta de cuero de moda.", ["perro", "chaqueta", "cuero", "ropa"], "/src/assets/images/products/chaqueta-cuero-perro.jpg"),
    new Product(11, "Pijama Cómoda para Perro", 59000, "Deja que tu perro duerma tranquilamente con esta pijama cómoda y suave.", ["perro", "pijama", "ropa"], "/src/assets/images/products/pijama-perro.jpg"),
    new Product(12, "Gorra para Perro", 35000, "Protege los ojos y la cabeza de tu perro del sol con esta divertida gorra.", ["perro", "gorra", "ropa"], "/src/assets/images/products/gorra-perro.jpg"),
    new Product(13, "Tenis para Perro", 45000, "Dale a tu perro un look casual con estos tenis de moda.", ["perro", "tenis", "ropa"], "/src/assets/images/products/tenis-perro.jpg"),
    new Product(14, "Gafas para Perro", 25000, "Dale a tu perro un look casual con estas gafas de moda.", ["perro", "gafas", "ropa"], "/src/assets/images/products/gafas-perro.jpg"),
    new Product(15, "Collar para Perro", 35000, "Dale a tu perro un look casual con este collar de moda.", ["perro", "collar", "ropa"], "/src/assets/images/products/collar-perro.jpg"),
    new Product(16 ,"Botas para Perro", 68000, "Protege las patitas de tu perro de superficies calientes, frías o ásperas con estas botas resistentes.", ["perro", "botas", "ropa"], "/src/assets/images/products/botas-perro.jpg"),
    new Product(17, "Chaleco para Perro", 55000, "Dale a tu perro un look casual con este chaleco de moda.", ["perro", "chaleco", "ropa"], "/src/assets/images/products/chaleco-perro.jpg"),
    new Product(18, "Suetér para Perro", 45000, "Mantén a tu perro abrigado con este suéter de alta calidad.", ["perro", "suéter", "ropa"], "/src/assets/images/products/sueter-perro.jpg"),
    new Product(19, "Disfraz Divertido para Perro", 45000, "Diviértete con tu perro vistiéndolo con este adorable disfraz temático.", ["perro", "disfraz", "ropa"], "/src/assets/images/products/disfraz-perro.jpg"),
    new Product(20, "Buso para Perro", 55000, "Dale a tu perro un look casual con este buso de moda.", ["perro", "buso", "ropa"], "/src/assets/images/products/buso-perro.jpg"),
].sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);

export const getProductById = (itemId) => {
    return products[itemId - 1];
};