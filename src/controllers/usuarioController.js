import bcrypt from "bcrypt";
import {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
} from "../models/usuarioModel.js";

export const getUsuarios = async (req, res) => {
    const usuarios = await obtenerUsuarios();
    res.json(usuarios);
};

export const getUsuario = async (req, res) => {

    const { id } = req.params;

    const usuario = await obtenerUsuarioPorId(id);

    res.json(usuario);
};

export const postUsuario = async (req, res) => {
    try {

        const datos = { ...req.body };

        datos.password = await bcrypt.hash(
            datos.password,
            10
        );

        const usuario = await crearUsuario(datos);

        delete usuario.password;

        res.status(201).json(usuario);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear usuario",
            error: error.message
        });
    }
};

export const putUsuario = async (req, res) => {
    try {

        const { id } = req.params;

        const datos = { ...req.body };

        if (datos.password) {
            datos.password = await bcrypt.hash(
                datos.password,
                10
            );
        }

        const usuario = await actualizarUsuario(
            id,
            datos
        );

        delete usuario.password;

        res.json(usuario);

    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar usuario",
            error: error.message
        });
    }
};

export const deleteUsuario = async (req, res) => {

    const { id } = req.params;

    const usuario = await eliminarUsuario(id);

    res.json(usuario);
};