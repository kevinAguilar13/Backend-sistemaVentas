import dotenv from "dotenv";
import express from "express";
import { conecctionDB } from "./config/database.js";

import productoRoutes from "./routes/productoRoutes.js";
import categoriaRoutes from "./routes/categoriaRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// Rutas
app.use("/api/productos", productoRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/auth", authRoutes);

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