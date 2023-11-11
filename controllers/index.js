const addContact = require("./contactsControllers/addContact");
const deleteContact = require("./contactsControllers/deleteContact");
const getContactById = require("./contactsControllers/getContactById");
const getContactList = require("./contactsControllers/getContactList");
const updateContact = require("./contactsControllers/updateContact");
const updateFavorite = require("./contactsControllers/updateFavorite");
const register = require("./authControllers/register");
const login = require("./authControllers/login");
const getCurrent = require("./authControllers/getCurrent");
const logout = require("./authControllers/logout");
const updateAvatar = require("./authControllers/updateAvatar");

module.exports = {
  addContact,
  deleteContact,
  getContactById,
  getContactList,
  updateContact,
  updateFavorite,
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
};
