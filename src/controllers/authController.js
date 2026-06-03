import { loginUsuario } from "../models/authModel.js";

export const login = async (req, res) => {

    const { email, password } = req.body;

    const usuario = await loginUsuario(
        email,
        password
    );

    if (!usuario) {

        return res.status(401).json({
            mensaje: "Correo o contraseña incorrectos"
        });

    }

    res.json({
        mensaje: "Login exitoso",
        usuario
    });
};