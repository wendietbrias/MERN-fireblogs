const {
  SignInHandler,
  SignUpHandler,
  UpdateProfile,
  AddAdmin,
} = require("../controller/auth");
const router = require("express").Router();

router.post("/signin", SignInHandler);
router.post("/signup", SignUpHandler);
router.patch("/update", UpdateProfile);
router.patch("/admin/:email", AddAdmin);

module.exports = router;
