const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🟢 Conectado com sucesso");
  } catch (error) {
    console.error("🔴 Ocorreu um erro ao conectar no DataBase", error);
    process.exit(1);
  }
}

module.exports = connectDB;
