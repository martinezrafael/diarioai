import "dotenv/config";

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Conectado ao banco de dados com sucesso!`);
  } catch (error) {
    console.error(`Erro na conexão com o banco de dados: ${error.message}`);
  }
};

export default connectDB;
