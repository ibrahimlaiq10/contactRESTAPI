const asyncHandler = require("express-async-handler");
const getContacts = async (req, res) => {
  res.json({ message: "send all contacts" });
};

const addContact = asyncHandler(async (req, res) => {
  const { name, email, number } = req.body;
  if (!name || !email || !number) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.json({ message: "create contacts" });
});
const getContact = asyncHandler(async (req, res) => {
  res.json({ message: "send single contact" });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.json({ message: "delete single contact" });
});

const updateContact = asyncHandler(async (req, res) => {
  res.json({ message: "update single contact" });
});

module.exports = {
  getContacts,
  addContact,
  getContact,
  deleteContact,
  updateContact,
};
