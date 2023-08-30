const express = require("express");
const router = express.Router();

const {
    createProduct,
    getAllProdcuts,
} = require("../controllers/productController");
const { uploadProductImage } = require("../controllers/uploadsController");

router.route("/").post(createProduct).get(getAllProdcuts);
router.route("/uploads").post(uploadProductImage);

module.exports = router;
