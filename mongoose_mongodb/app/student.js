// it is a good practice to name the model in singular. 

// first import the mongoose. 

const mongoose = require("mongoose");

// use Schema to define the Schema of student in the db 

const Schema = mongoose.Schema;

// define the student schema 

const StudentSchema = new Schema({

    // define the fields here:  name: type

    name: String
});

// now need to create model using this schema (name of the model and the schema for that model in the db.)

const Student = mongoose.model("student",StudentSchema);

// now we need to export this model so that we can use it other file. 

module.exports = Student;