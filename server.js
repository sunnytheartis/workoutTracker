const express = require("express");
const mongoose = require("mongoose");

// Port
const PORT = process.env.PORT || 5500;


const app = express();


app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


app.use(express.static("public"));

//mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Routes 
app.use(require("./routes/views.js"));
app.use(require("./routes/apiR.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});