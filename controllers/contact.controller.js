const Contact = require("../models/Contact");
const catchAsync = require("../helpers/catchAsync");

const getContacts = catchAsync(async (req, res) => {
  const contacts = await Contact.find();
  res.send(contacts);
});

const create = catchAsync(async (req, res) => {
  const contact = await Contact.create(req.body);
  res.send(contact);
});

const getContact = catchAsync(async (req, res) => {
  const idContact = req.params.id;
  const contact = await Contact.findById(idContact);
  if (contact) {
    res.send(contact);
  } else {
    res.status(404).send("Contact introuvable");
  }
});

const updateById = catchAsync(async (req, res) => {
  const idContact = req.params.id;
  const contact = await Contact.findByIdAndUpdate(idContact, req.body, {
    new: true,
  });
  if (contact) {
    res.send(contact);
  } else {
    res.status(404).send("Contact introuvable");
  }
});

const deleteById = catchAsync(async (req, res) => {
  const idContact = req.params.id;
  const contact = await Contact.findByIdAndDelete(idContact);
  if (contact) {
    res.send(contact);
  } else {
    res.status(404).send("Contact introuvable");
  }
});

module.exports = {
  getContacts,
  create,
  getContact,
  updateById,
  deleteById,
};
