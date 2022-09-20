const userModel = require("../db/schema/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (payload) => {
  return jwt.sign(payload, `secret`, { expiresIn: "1d" });
};

const SignUpHandler = async (req, res) => {
  const { email, password, name, firstName, lastName } = req.body;
  const findUser = await userModel.findOne({ email: { $eq: email } });

  if (findUser) {
    return res.status(406).json({ msg: "Account is exists" });
  }

  const initUser = new userModel({
    email,
    firstName: firstName,
    lastName: lastName,
    name: name,
  });

  bcrypt.genSalt(10, async (err, salt) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (salt) {
      bcrypt.hash(password, salt, async (err, hash) => {
        initUser.password = hash;
        const saved = await initUser.save();

        try {
          const token = generateToken({
            firstName: initUser.firstName,
            lastName: initUser.lastName,
            name: initUser.name,
            email: initUser.email,
            _id: initUser._id,
          });

          return res.status(200).json(token);
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      });
    }
  });
};

const SignInHandler = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await userModel.findOne({ email: { $eq: email } });

  if (!findUser) {
    return res.status(406).json({ msg: "Account is not found" });
  }

  bcrypt.compare(password, findUser?.password, async (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result) {
      try {
        const token = generateToken({
          firstName: findUser.firstName,
          lastName: findUser.lastName,
          name: findUser.name,
          email: findUser.email,
          _id: findUser._id,
          isAdmin: findUser.isAdmin,
        });

        return res.status(200).json(token);
      } catch (err) {
        return res.status(500).json({ msg: err.message });
      }
    }
  });
};

const UpdateProfile = async (req, res) => {
  const findUser = await userModel.findOne({
    email: { $eq: req.body.email },
  });

  if (!findUser) {
    return res.status(406).json({ msg: "Account is not found" });
  }

  findUser.firstName = req.body.firstName;
  findUser.lastName = req.body.lastName;
  findUser.name = req.body.name;
  findUser.email = req.body.email;

  try {
    await findUser.save();
    const token = generateToken({
      firstName: findUser.firstName,
      lastName: findUser.lastName,
      name: findUser.name,
      email: findUser.email,
      _id: findUser._id,
      isAdmin: findUser?.isAdmin,
    });
    return res.status(200).json(token);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const AddAdmin = async (req, res) => {
  const findUser = await userModel.findOne({
    email: { $eq: req.params.email },
  });
  if (!findUser) {
    return res.status(406).json({ msg: "Account is not found" });
  }

  findUser.isAdmin = true;
  const saved = await findUser.save();
  return res.status(200).json(saved);
};

module.exports = { SignInHandler, SignUpHandler, UpdateProfile, AddAdmin };
