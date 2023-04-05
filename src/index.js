const express = require("express");
require("dotenv").config();
const router = require("./Router/routes");
const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`express APP is running on PORT : ${PORT}`);
});
