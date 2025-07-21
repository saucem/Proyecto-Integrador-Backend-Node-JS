// controller
import usersServices from '../services/users.services.js'

const getAll = async (req, res) => {
  try {
    const users = await usersServices.getAllUsers();
    res.status(200).json(users);  
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await usersServices.getUserById(id);
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(404).json({message: "Usuario no encontrado"});
    };    
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

const create = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const newUser = await usersServices.createUser({ name, email, role });
    res.status(201).json(newUser);    
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await usersServices.getUserById(id);
    if (user) {
      usersServices.deleteUser(id);
      res.status(200).json({message: "Usuario eliminado"});
    } else {
      res.status(404).json({message: "Usuario no encontrado"});
    };    
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

export default { getAll, getById, create, deleteById };
