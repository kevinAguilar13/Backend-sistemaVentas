import bcrypt from "bcrypt";
import { loginUsuario } from "../models/authModel.js";

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

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

        delete usuario.password;

        res.json({
            mensaje: "Login exitoso",
            usuario
        });

    } catch (error) {
        res.status(500).json({
            mensaje: "Error en el login",
            error: error.message
        });
    }
};