// controller
import userService from '../services/users.services.js'

const getAll = (req, res) => {
  const users = userService.getAll();
  res.status(200).json(users);
};

const getById = (req, res) => {};

const create = async (req, res) => {
  const {name, email} = req.body;
  const newUser = await userService.create({name, email});
  res.status(201).json(newUser);
};

const deleteById = (req, res) => {};

export default { getAll, getById, create, deleteById };
