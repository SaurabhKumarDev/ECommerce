const router = require("express").Router();

const addressController = require("../controller/address.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/", authenticate, addressController.getAllUserAddress);
// router.get("/id/:id", authenticate, addressController.findProductById);

module.exports = router;