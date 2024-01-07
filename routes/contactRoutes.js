const express = require("express");
const router = express.Router();
const {
  getContacts,
  addContact,
  getContact,
  deleteContact,
  updateContact,
} = require("../controller/contactController");

router.route("/").get(getContacts).post(addContact);
router.route("/:id").get(getContact).delete(deleteContact).put(updateContact);
module.exports = router;
