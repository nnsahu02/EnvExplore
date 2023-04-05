require("dotenv").config();

//console.log(USER_DATA);
const USER_DATA = process.env.USER_DATA;
const Users = JSON.parse(USER_DATA);

const userData = (req, res) => {
  try {
    return res.status(201).send({ status: true, data: Users });
  } catch (error) {
    return res.status(500).send({ status: "False", error: error.message });
  }
};

const CreateUser = (req, res) => {
  try {
    const body = req.body;
    Users.push(body);
    return res.status(201).send({ data: body });
  } catch (error) {
    return res.status(500).send({ status: "False", error: error.message });
  }
};

const getUserByName = (req, res) => {
  try {
    const name = req.params.name;
    let arr = [];
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].name == name) {
        arr.push(Users[i]);
      }
    }
    return res.send({ data: arr })
  } catch (error) {
    return res.status(500).send({ status: "False", error: error.message });
  }
};

module.exports = { userData, CreateUser, getUserByName };

/*
PORT = 3000

//USER_DATA = [{"name" : "Akash",age : 27,Role : "CEO"},{name : "Rahul",age : 23,Role : "BackEnd Developer"},{name : "Jyoti",age : 23,Role : "BackEnd Developer"},{name : "Suraj",age : 24,Role : "Frontend Developer"},{name : "Tarun",age : 23,Role : "Frontend Developer"},{name : "Farhan",age : 23,Role : "FrontEnd Developer"},{name : "Swyan",age : 24,Role : "UI/UX"}]
*/
