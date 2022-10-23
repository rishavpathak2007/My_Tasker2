const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Chandana:cvml462ccl4*@mytasker.wknnc.mongodb.net/task?retryWrites=true&w=majority"); 

let db = mongoose.Schema({
  content: {
    type : String,
    required: true
  }
});

module.exports = mongoose.model('schema' , db);

