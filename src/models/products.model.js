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

const productsCollection = collection(db, 'products');

export async function getAllProducts() {
  try {
    const productList = await getDocs(productsCollection);
    const products = [];
    productList.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

export async function getProductById(id) {
  try {
    const product = await getDoc(doc(productsCollection, id));
    if (product.exists()) {
      return product.data();
    } else {
      return null;
    };
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};

export async function saveProduct(product) {
  try {
    await addDoc(productsCollection, product);
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };


};

export async function deleteProduct(id) {
  try {
    await deleteDoc(doc(productsCollection, id));
  } catch (error) {
    throw new Error("Error interno del servidor", error.message);
  };
};