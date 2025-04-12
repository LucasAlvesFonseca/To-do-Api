const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config()
const connectDB = require("./config/db")
const port = process.env.PORT || 3000;

// DB Connect
connectDB()

//ROUTERS
const taskRoutes = require('./routes/tasks.routes');

// USEs
app.use(cors())
app.use(express.json())
app.use("/tasks", taskRoutes)


app.listen(port, () => console.log(`Rodando na porta: ${port}!`));