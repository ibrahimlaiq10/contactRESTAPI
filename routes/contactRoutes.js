const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

const {
  getContacts,
  addContact,
  getContact,
  deleteContact,
  updateContact,
} = require("../controller/contactController");

router.use(validateToken);
router.route("/").get(getContacts).post(addContact);
router.route("/:id").get(getContact).delete(deleteContact).put(updateContact);
module.exports = router;
