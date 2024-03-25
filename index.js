import { program } from "commander";
// import {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
// } from "./contacts.js";

import contacts from "./contacts.js";

// const { listContacts, getContactById, removeContact, addContact } = contacts;

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.log(await contacts.listContacts());
      break;

    case "get":
      console.log(await contacts.getContactById(id));
      break;

    case "add":
      console.log(await contacts.addContact(name, email, phone));
      break;

    case "remove":
      console.log(await contacts.removeContact(id));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
