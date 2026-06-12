import jwt from "jsonwebtoken";

export const verificarToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({
            mensaje: "Acceso denegado. Token no proporcionado"
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET || "secret_key"
        );
        req.usuario = decoded;
        next();
    } catch (error) {
        return res.status(403).json({
            mensaje: "Token inválido o expirado"
        });
    }
};