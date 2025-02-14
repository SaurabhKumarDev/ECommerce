const router = require("express").Router();

const cartItemController = require("../controller/cartItem.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.put("/:id", authenticate, cartItemController.updateCartItem);
router.delete("/:id", authenticate, cartItemController.removeCartItem);

module.exports = router;