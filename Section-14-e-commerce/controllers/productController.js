const Product = require("../models/Product");
const StatusCodes = require("http-status-codes");
const CustomError = require("../errors");
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;

const createProduct = async (req, res) => {
    req.body.user = req.user.userId;
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
};

const getAllProducts = async (req, res) => {
    const products = await Product.find({}).populate("reviews");
    res.status(StatusCodes.OK).json({ products, count: products.length });
};

const getSingleProduct = async (req, res) => {
    const { id: productId } = req.params;
    const product = await Product.findOne({ _id: productId }).populate(
        "reviews"
    );

    if (!product) {
        throw new CustomError.NotFoundError(`No product with id: ${productId}`);
    }

    res.status(StatusCodes.OK).json({ product });
};

const updateProduct = async (req, res) => {
    const { id: productId } = req.params;
    const product = await Product.findOneAndUpdate(
        { _id: productId },
        req.body,
        { new: true, runValidators: true }
    );

    if (!product) {
        throw new CustomError.NotFoundError(`No product with id: ${productId}`);
    }

    res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
    const { id: productId } = req.params;
    const product = await Product.findOne({ _id: productId });

    if (!product) {
        throw new CustomError.NotFoundError(`No product with id: ${productId}`);
    }

    await product.remove();

    res.status(StatusCodes.OK).json({ msg: "Success! Product Removed" });
};

//uploadImage cloud
//req.files.image.tempFilePath
const uploadImage = async (req, res) => {
    // try {
    // const imagePath = path.join(
    //     __dirname,
    //     `../public/uploads/example.jpeg`
    // );
    // console.log(imagePath);
    const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
            use_filename: true,
            folder: "sports-shop",
        }
    );

    fs.unlinkSync(req.files.image.tempFilePath);
    res.status(StatusCodes.OK).json({ image: result.secure_url });
    // } catch (err) {
    //     console.log(err);
    // }
};

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage,
};

//uploadImageLocal
// const uploadImageLocal = async (req, res) => {
//     if (!req.files) {
//         throw new CustomError.BadRequestError("No file Uploaded");
//     }

//     const productImage = req.files.image;

//     if (!productImage.mimetype.startsWith("image")) {
//         throw new CustomError.BadRequestError("Please upload Image");
//     }

//     const maxSize = 1024 * 1024;

//     if (productImage.size > maxSize) {
//         throw new CustomError.BadRequestError(
//             "Please Upload Image smaller than 1MB"
//         );
//     }

//     const imagePath = path.join(
//         __dirname,
//         "../public/uploads/" + `${productImage.name}`
//     );

//     await productImage.mv(imagePath);

//     res.status(StatusCodes.OK).json({ image: `/uploads/${productImage.name}` });
// };
