import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { loginUsuario } from "../models/authModel.js";

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                mensaje: "Email y contraseña son requeridos"
            });
        }

        const usuario = await loginUsuario(email);

        if (!usuario) {
            return res.status(401).json({
                mensaje: "Correo o contraseña incorrectos"
            });
        }

        const passwordValida = await bcrypt.compare(
            password,
            usuario.password
        );

        if (!passwordValida) {
            return res.status(401).json({
                mensaje: "Correo o contraseña incorrectos"
            });
        }

        const token = jwt.sign(
            {
                id_usuario: usuario.id_usuario,
                email: usuario.email,
                id_rol: usuario.id_rol
            },
            process.env.JWT_SECRET || "secret_key",
            { expiresIn: "24h" }
        );

        delete usuario.password;

        res.json({
            mensaje: "Login exitoso",
            token,
            usuario
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error en el login",
            error: error.message
        });
    }
};