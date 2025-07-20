// services
import * as productModel from '../models/products.model.js'

//Persistencia temporal en memoria 
const products = [];

//

//const getAll = () => {
//  return products;
//};

const getAllProducts = () => {
  return productModel.getAllProducts();
};

const getProductById = async (id) => {
  return productModel.getProductById(id);
}

const createProduct = async (productData) => {
  const { name, price, stock, active} = productData;
  return await productModel.saveProduct(name, price, stock, active);
};

const deleteProduct = async (id) => {
  return await productModel.deleteProduct(id);
}

export default { getAllProducts, getProductById, createProduct, deleteProduct };