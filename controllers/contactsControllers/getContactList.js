const { Contact } = require("../../models/contact");
const { ctrlWrapper } = require("../../helpers");

const getContactList = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.find({ owner }, "-createdAt -updatedAt");
  res.status(200).json(result);
};

module.exports = {
  getContactList: ctrlWrapper(getContactList),
};
