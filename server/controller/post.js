const postModel = require("../db/schema/post");

const GetAllPost = async (req, res) => {
  const allPost = await postModel.find();
  res.status(200).json(allPost);
};

const CreatePost = async (req, res) => {
  const { title, cover, content } = req.body;

  const initPost = new postModel({
    title,
    cover,
    content,
  });

  try {
    const saved = await initPost.save();
    return res.status(200).json(saved);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { GetAllPost, CreatePost };
