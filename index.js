const yargs = require("yargs");
const { addNote, getNote, removeNote } = require("./notes-controllers");
const path = require("path");
const notesPath = path.join(__dirname, "db.json");
const array = require(notesPath);

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  handler() {
    console.log("Here is the list of notes:");
    for (let key of array) {
      console.log(key.id + " " + key.title);
    }
  },
});

yargs.command({
  command: "remove",
  describe: "Remove note by id",
  builder: {
    id: {
      type: "string",
      describe: "Note uniq id",
      demandOption: true,
    },
  },
  handler({ id }) {
    removeNote(id);
  },
});

yargs.parse();
