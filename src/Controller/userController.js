require("dotenv").config();

const USER_DATA = process.env.USER_DATA;
const Users = JSON.parse(USER_DATA);

const userData = (req, res) => {
  try {
    return res.status(200).send({ status: true, data: Users });
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

    if (arr.length != 0) {
      return res.status(200).send({ data: arr })
    } else {
      return res.send({ msg: `no user found with the name ${name}!!` })
    }

  } catch (error) {
    return res.status(500).send({ status: "False", error: error.message });
  }
};

module.exports = { userData, CreateUser, getUserByName };

