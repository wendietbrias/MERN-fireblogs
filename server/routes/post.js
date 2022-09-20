const { GetAllPost, CreatePost } = require("../controller/post");
const router = require("express").Router();

router.get("/all", GetAllPost);
router.post("/create", CreatePost);

module.exports = router;
