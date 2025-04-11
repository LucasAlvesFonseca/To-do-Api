const express = require("express");
const cors = require("cors")
const app = express();
require("dotenv").config()
const port = 3000;
 
//ROUTERS
const taskRoutes = require('./routes/tasksRoutes');

// USEs
app.use(cors())
app.use(express.json())
app.use("/tasks", taskRoutes)


app.listen(port, () => console.log(`Rodando na porta: ${port}!`));git che