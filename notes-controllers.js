module.exports = {
  addNote,
  getNotes,
  removeNote,
};
const fs = require("fs/promises");
const path = require("path");

const notesPath = path.join(__dirname, "db.json");

async function addNote(title) {
  const notes = require(notesPath);
  const note = {
    id: Date.now().toString(),
    title,
  };

  notes.push(note);

  await fs.writeFile(notesPath, JSON.stringify(notes));
}

function getNotes() {
  return require(notesPath);
}

async function removeNote(id) {
  const notes = await require(notesPath);
  const filtered = notes.filter((note) => note.id !== id);
  await fs.writeFile(notesPath, JSON.stringify(filtered));
}
