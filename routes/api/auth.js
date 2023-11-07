const express = require("express");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
} = require("../../controllers/index");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  register.register
);

router.post("/login", validateBody(schemas.loginSchema), login.login);

router.get("/current", authenticate, getCurrent.getCurrent);

router.post("/logout", authenticate, logout.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  updateAvatar.updateAvatar
);

module.exports = router;
