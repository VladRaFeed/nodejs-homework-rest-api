const { User } = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../helpers");
const bcryptjs = require("bcryptjs");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPass = await bcryptjs.hash(password, 10);
  const avatarURL = gravatar.url(email);

  console.log(hashPass);

  const newUser = await User.create({
    ...req.body,
    password: hashPass,
    avatarURL,
  });

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
