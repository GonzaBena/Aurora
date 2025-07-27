export class Product {
    id: number;
    icon: string;
    name: string;
    price: number;
    category: Category[] | Category;
    image: string;
    description: string;

    constructor(id: number, icon: string, name: string, price: number, category: Category[] | Category, image: string, description: string) {
        this.id = id;
        this.icon = icon;
        this.name = name;
        this.price = price;
        this.category = category;
        this.image = image;
        this.description = description;
    }
}

export enum Category {
    Panes = "Panes",
    Pasteles = "Pasteles",
    Galletas = "Galletas",
    Bebidas = "Bebidas",
}

const products: Product[] = [
    new Product(
        0,
        "🥐",
        "Croissants Artesanales",
        3.5,
        Category.Panes,
        "",
        "Croissants hojaldrados con mantequilla francesa, perfectos para el desayuno"
    ),
    new Product(
        1,
        "🍞",
        "Pan Integral Casero",
        4.25,
        Category.Panes,
        "",
        "Pan integral con semillas, perfecto para una alimentación saludable"
    ),
    new Product(
        2,
        "🧁",
        "Cupcakes de Vainilla",
        2.75,
        Category.Panes,
        "",
        "Deliciosos cupcakes con frosting de vainilla y decoración artesanal"
    ),
    new Product(
        4,
        "🥖",
        "Pan Francés",
        2.50,
        Category.Panes,
        "",
        "Baguette tradicional francesa con corteza crujiente"),
    new Product(
        5,
        "🍞",
        "Pan de Centeno",
        3.75,
        Category.Panes,
        "",
        "Pan denso y nutritivo con sabor  intenso"),

    new Product(
        6,
        "🫓",
        "Pan Pita",
        1.25,
        Category.Panes,
        "",
        "Pan plano perfecto para rellenos"),
    new Product(
        7,
        "🍞",
        "Pan Brioche",
        4.50,
        Category.Panes,
        "",
        "Pan dulce y esponjoso enriquecido con huevos"),

    new Product(
        8,
        "🍰",
        "Tarta de Chocolate",
        15.99,
        Category.Pasteles,
        "",
        "Deliciosa tarta de chocolate con ganache"),

    new Product(
        9,
        "🍰",
        "Cheesecake",
        18.50,
        Category.Pasteles,
        "",
        "Cheesecake clásico con base de galleta"),

    new Product(
        10,
        "🍰",
        "Tarta de Frutas",
        16.75,
        Category.Pasteles,
        "",
        "Tarta fresca con frutas de temporada"),

    new Product(
        11,
        "🧁",
        "Pastel Red Velvet",
        19.99,
        Category.Pasteles,
        "",
        "Pastel de terciopelo rojo con cream cheese"),
    new Product(
        12,
        "🍪",
        "Cookies de Chocolate",
        1.50,
        Category.Galletas,
        "",
        "Galletas caseras con chips de chocolate"),

    new Product(
        13,
        "🍪",
        "Alfajores",
        2.25,
        Category.Galletas,
        "",
        "Galletas rellenas de dulce de leche"),

    new Product(
        14,
        "🍪",
        "Macarons",
        3.00,
        Category.Galletas,
        "",
        "Delicados macarons franceses de colores"),

    new Product(
        15,
        "🍪",
        "Galletas de Avena",
        1.75,
        Category.Galletas,
        "",
        "Galletas saludables con avena y pasas"),
    new Product(
        16,
        "☕",
        "Café Americano",
        2.50,
        Category.Bebidas,
        "",
        "Café negro recién preparado"),

    new Product(
        17,
        "☕",
        "Cappuccino",
        3.25,
        Category.Bebidas,
        "",
        "Espresso con leche vaporizada y espuma"),

    new Product(
        18,
        "🫖",
        "Té Chai Latte",
        3.75,
        Category.Bebidas,
        "",
        "Té especiado con leche y canela"),

    new Product(
        19,
        "☕",
        "Chocolate Caliente",
        3.50,
        Category.Bebidas,
        "",
        "Chocolate cremoso con marshmallows"),

]
export default products