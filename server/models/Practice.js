const moongoose = require("mongoose");

const practiceSchema = new moongoose.Schema({
  sepractice: String,
});

const Practice = moongoose.model("Practice", practiceSchema);
module.exports = Practice;
