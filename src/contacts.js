import { promises as fs } from "fs";
import path from "path";

const contactsPath = path.join("db", "contacts.json");

async function listContacts() {
  try {
    const readJsonResult = await fs.readFile(contactsPath, "utf-8");
    console.log(readJsonResult);
    const arrayOfContacts = JSON.parse(readJsonResult);
    console.log(arrayOfContacts);
    return arrayOfContacts;
  } catch (error) {
    console.log(error);
  }
}
listContacts();

export default listContacts;

// module.exports = {
//   listContacts,
// };
