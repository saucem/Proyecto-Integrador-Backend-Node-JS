import fs from 'fs';
import path from 'path';

const __dirname = import.meta.dirname
console.log(__dirname);
const dataPath = path.join(__dirname, "../data/products.json");

export class product {
  constructor (name, price, stock, active) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.active = active;
  }
}

export function getAllProducts() {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
};

export function getProductById(id) {
  const products = this.getAllProducts();
  return products.find(product => product.id === id);
};

export function saveProduct(name, price, stock, active) {
  const products = this.getAllProducts();
  products.push({id: crypto.randomUUID(), name, price, stock, active });
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));

};

export function deleteProduct(id) {
  const products = this.getAllProducts();
  const filteredProducts = products.filter(product => product.id !== id);
  fs.writeFileSync(dataPath, JSON.stringify(filteredProducts, null, 2));
};