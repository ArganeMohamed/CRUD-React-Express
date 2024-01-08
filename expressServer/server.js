const express = require("express");
const App = express();
const cors = require("cors")
const controller = require("./controller");

App.use(express.json())
App.use(cors())

App.get("/", controller.getUsers);
App.post("/adduser", controller.addUser);
App.post("/delete", controller.deleteUser);
App.post("/single", controller.singleUser)
App.post("/update", controller.updateUser);
App.post("/search", controller.search);

App.listen(8000, () => console.log("Server running on port 8000"));
