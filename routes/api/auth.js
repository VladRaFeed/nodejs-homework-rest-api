const express = require("express");
const { register, login } = require("../../controllers/index");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  register.register
);

router.post("/login", validateBody(schemas.loginSchema), login.login);

module.exports = router;
