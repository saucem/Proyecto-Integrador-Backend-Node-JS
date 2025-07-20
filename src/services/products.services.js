// services
// import ... from '../models/products.model.js'

//Persistencia temporal en memoria 
const products = [];

//

const getAll = () => {
  return products;
};

const create = (product) => {
  const newProduct = {
    id: crypto.randomUUID(),
    name: product.name,
    price: product.price,
    stock: product.stock || 0,
    active: product.active || true
  };
  products.push(newProduct);
  return newProduct;
};

export default { getAll, create };