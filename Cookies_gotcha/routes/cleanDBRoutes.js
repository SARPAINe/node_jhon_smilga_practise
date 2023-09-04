const express = require("express");
const router = express();
const { deleteUsers } = require("../controllers/cleanUser");

router.delete("/users", deleteUsers);
module.exports = router;
