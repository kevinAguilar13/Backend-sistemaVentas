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

    const usuario = await crearUsuario(req.body);

    res.status(201).json(usuario);
};

export const putUsuario = async (req, res) => {

    const { id } = req.params;

    const usuario = await actualizarUsuario(
        id,
        req.body
    );

    res.json(usuario);
};

export const deleteUsuario = async (req, res) => {

    const { id } = req.params;

    const usuario = await eliminarUsuario(id);

    res.json(usuario);
};