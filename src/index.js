import dotenv from "dotenv";
import express from "express";
import { conecctionDB } from "./config/database.js";

import productoRoutes from "./routes/productoRoutes.js";
import categoriaRoutes from "./routes/categoriaRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";
import detallePedidoRoutes from "./routes/detallePedidoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Swagger Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use("/api/productos", productoRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/detalle-pedido", detallePedidoRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await conecctionDB();

        app.listen(PORT, () => {
            console.log(
                `Servidor corriendo en http://localhost:${PORT}`
            );
            console.log(
                `Documentación Swagger: http://localhost:${PORT}/api-docs`
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