import mongoose from "mongoose";

const connect = () => {
    mongoose.connect(
        `mongodb+srv://jaobarreto:admin@cluster0.uvi1h.mongodb.net/API-FutebolBrasileiro?retryWrites=true&w=majority&appName=Cluster0`
    )
}

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Erro ao conectar com o mongoDB Atlas.");
});

connection.on("open", () => {
  console.log("Conectado ao mongoDB Atlas com sucesso.");
});

connect()

export default mongoose;