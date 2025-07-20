// controller
import productsServices from '../services/products.services.js'

const getAll = (req, res) => {
  const products = productsServices.getAll();
  res.status(200).json(products);
};

const getById = (req, res) => {};

const create = async (req, res) => {
  const {name, price, stock, active} = req.body;
  const newProduct = await productsServices.create({name, price, stock, active});
  res.status(201).json(newProduct);
};

const deleteById = (req, res) => {};

export default { getAll, getById, create, deleteById };
