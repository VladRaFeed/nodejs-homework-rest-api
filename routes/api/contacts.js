const express = require("express");

const ctrl = require("../../controllers/books");
const { validateBody } = require("../../middlewares");
const { addSchema } = require("../../Schemas/books");

const router = express.Router();

router.get("/", ctrl.getContactList);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", validateBody(addSchema), ctrl.updateContact);

module.exports = router;
