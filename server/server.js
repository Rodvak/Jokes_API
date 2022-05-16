// import all depedencies 
const express = require("express");
const app = express();
const port = 8000;

// config mongoose
require("./configs/mongoose.config")

// configure express
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes and logic
require("./routes/jokes.routes")(app)

// listen to the port 
app.listen( port, () => console.log(`Listening on port: ${port}`) );
