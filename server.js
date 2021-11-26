const express = require("express");
const mongoose = require("mongoose");

// Port
const PORT = process.env.PORT || 3002;


const app = express();


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


app.use(express.static("public"));

//mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

// Routes 
require("./routes/views.js")(app);
require("./routes/api.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});