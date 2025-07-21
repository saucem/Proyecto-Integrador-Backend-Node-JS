// services
import * as userModel from '../models/users.model.js'

const getAllUsers = () => {
  return userModel.getAllUsers();
};

const getUserById = async (id) => {
  try {
    return await userModel.getUserById(id);
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

const createUser = async (userData) => {
  try {
    return await userModel.saveUser(userData);
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

const deleteUser = async (id) => {
  try {
    return await userModel.deleteUser(id);
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

export default { getAllUsers, getUserById, createUser, deleteUser };