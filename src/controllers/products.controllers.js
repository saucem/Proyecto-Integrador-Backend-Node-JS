// controller
import productsServices from '../services/products.services.js'

const getAll = async (req, res) => {
  try {
    const products = await productsServices.getAllProducts();
    res.status(200).json(products);  
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productsServices.getProductById(id);
    if (product) {
      res.status(201).json(product);
    } else {
      res.status(404).json({message: "Producto no encontrado"});
    };
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

const create = async (req, res) => {
  try {
    const { name, price, stock, active } = req.body;
    const newProduct = await productsServices.createProduct({ name, price, stock, active });
    res.status(201).json(newProduct);
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productsServices.getProductById(id);
    if (product) {
      productsServices.deleteProduct(id);
      res.status(200).json({message: "Producto eliminado"});
    } else {
      res.status(404).json({message: "Producto no encontrado"});
    };   
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

export default { getAll, getById, create, deleteById };
