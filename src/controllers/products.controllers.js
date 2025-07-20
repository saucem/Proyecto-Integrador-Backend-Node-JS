// controller
import productsServices from '../services/products.services.js'

const getAll = async (req, res) => {
  const products = await productsServices.getAllProducts();
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const id = req.params.id;
  const product = await productsServices.getProductById(id);
  if (product) {
    res.status(201).json(product);
  } else {
    res.status(404).json({message: "Producto no encontrado"});
  }
};

const create = async (req, res) => {
  const { name, price, stock, active } = req.body;
  const newProduct = await productsServices.createProduct({ name, price, stock, active });
  res.status(201).json(newProduct);
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  const product = await productsServices.getProductById(id);
  if (product) {
    productsServices.deleteProduct(id);
    res.status(200).json({message: "Producto eliminado"});
  } else {
    res.status(404).json({message: "Producto no encontrado"});
  }
};

export default { getAll, getById, create, deleteById };
