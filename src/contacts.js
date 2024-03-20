const fs = require("fs/promises");

// const path = require("path");
// const contactsPath = path.join(__dirname, "contacts.json");
const contactsPath = require("./db/contacts.json");

async function listContacts() {
  const array = await fs.readFile(contactsPath, "utf-8");
  console.log(array);
  return array;
}
listContacts();

module.exports = {
  listContacts,
};
