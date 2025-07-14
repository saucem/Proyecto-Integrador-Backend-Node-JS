// services
// import ... from '../models/user.model.js'

//Persistencia temporal en memoria 
const users = [];

//

const getAll = () => {
  return users;
};

const create = (user) => {
  const newUser = {
    id: crypto.randomUUID(),
    name: user.name,
    email: user.email
  };
  users.push(newUser);
  return newUser;
};


export default { getAll, create };
