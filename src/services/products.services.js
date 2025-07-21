// services
import * as productModel from '../models/products.model.js'

const getAllProducts = () => {
  return productModel.getAllProducts();
};

const getProductById = async (id) => {
  try {
    return await productModel.getProductById(id);  
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

const createProduct = async (productData) => {
  try {
    return await productModel.saveProduct(productData);  
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

const deleteProduct = async (id) => {
  try {
    return await productModel.deleteProduct(id);  
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

export default { getAllProducts, getProductById, createProduct, deleteProduct };