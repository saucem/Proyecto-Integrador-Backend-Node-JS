// model
import { db } from '../config/db.js';
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

const usersCollection = collection(db, 'users');

export async function getAllUsers() {
  try {
    const userList = await getDocs(usersCollection);
    const users = [];
    userList.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  }
};

export async function getUserById(id) {
  try {
    const user = await getDoc(doc(usersCollection, id));
    if (user.exists()) {
      return user.data();
    } else {
      return null;
    };
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  }
};

export async function saveUser(product) {
  try {
    await addDoc(usersCollection, product);    
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  }
};

export async function deleteUser(id) {
  try {
    await deleteDoc(doc(usersCollection, id));
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  }
};
