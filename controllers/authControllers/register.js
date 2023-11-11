const { User } = require("../../models/user");
const { HttpError, ctrlWrapper, sendEmail } = require("../../helpers");
const bcryptjs = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid"); 

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPass = await bcryptjs.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verifyCode = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashPass,
    avatarURL, verifyCode  
  });
  const verifyEmail = {
    to: email,
    subject: "Verify Email",
    html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verifyCode}">Click to verify email</a>`
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

module.exports = {
  register: ctrlWrapper(register),
};
