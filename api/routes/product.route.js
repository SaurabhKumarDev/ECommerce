const router = require("express").Router();

const productController = require("../controller/product.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/", authenticate, productController.getAllProducts);
router.get("/id/:id", authenticate, productController.findProductById);

module.exports = router;