const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🟢 Conectado com sucesso");

    // Eventos do mongoose
    mongoose.connection.on("disconnected", () => {
      console.warn("🟡 MongoDB desconectado");
    });
    mongoose.connection.on("reconnected", () => {
      console.log("🔄 MongoDB reconectado");
    });
    mongoose.connection.on("error", (err) => {
      console.error("❌ Erro na conexão com o MongoDB:", err);
    });
  } catch (error) {
    console.error("🔴 Ocorreu um erro ao conectar no DataBase", error);
    process.exit(1);
  }
}

module.exports = connectDB;
