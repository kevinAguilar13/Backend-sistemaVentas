import dotenv from "dotenv";
import express from "express";
import { conecctionDB } from "./config/database.js";
import clienteRoutes from "./routes/clienteRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/clientes", clienteRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await conecctionDB();

        app.listen(PORT, () => {
            console.log(
                `Servidor corriendo en http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error(
            "Error al conectar con la base de datos:",
            error
        );
    }
};

startServer();