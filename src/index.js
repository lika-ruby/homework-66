import productsList from "./template/products.hbs";
import productsData from "./data/products.json";

const productsMenu = document.querySelector(".products-list");
const products = productsData.products;
const productsLayout = productsList({ products });
productsMenu.innerHTML = productsLayout;
