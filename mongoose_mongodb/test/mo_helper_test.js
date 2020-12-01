// mo: mocha

// import mongoose

const mongoose = require("mongoose");

// connect to mongodb server
const connectUri = "mongodb://65.0.6.15/student";

// to tell we will be using the ES6 promise need to set one property.
mongoose.Promise = global.Promise;

// connecting to the mongodb server
mongoose.connect(connectUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// now to test the connection.
// need to add the script as `mocha`
before(done => {
    mongoose.connection
        .once("open", () => done())
        .on("error", (err) => {
            console.log("Connection Error: ", err);
        });
});

// // it is a promise and once and on api it uses,
// mongoose.connection
//   .once("open", () => console.log("Connected")) // open,error is an event which mongodb sends back
//   .on("error", (err) => {
//     console.log("Connection Error: ", err);
//   });
