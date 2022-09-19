const mongoose = require("mongoose");

const dbConfig =
  "mongodb+srv://usuario:usuario@cluster0.qpf7ko9.mongodb.net/annotations?retryWrites=true&w=majority";

const connection = mongoose.connect(dbConfig);

module.exports = connection;
