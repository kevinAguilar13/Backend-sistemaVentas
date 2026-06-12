import dotenv from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";

dotenv.config();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Sistema de Ventas",
            version: "1.0.0",
            description: "Documentacion de la API del Sistema de Ventas"
        },
        servers: [
            {
                url: process.env.LOCAL_URL,
                description: "Servidor Local"
            },
            {
                url: process.env.RENDER_URL,
                description: "Servidor Produccion"
            }
        ]
    },
    apis: ["./routes/*.js"]
};

export const swaggerSpec = swaggerJSDoc(options);