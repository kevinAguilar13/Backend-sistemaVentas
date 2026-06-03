import {
    obtenerCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
} from "../models/categoriaModel.js";

export const getCategorias = async (req, res) => {

    const categorias = await obtenerCategorias();

    res.json(categorias);
};

export const getCategoria = async (req, res) => {

    const { id } = req.params;

    const categoria = await obtenerCategoriaPorId(id);

    res.json(categoria);
};

export const postCategoria = async (req, res) => {

    const categoria = await crearCategoria(req.body);

    res.status(201).json(categoria);
};

export const putCategoria = async (req, res) => {

    const { id } = req.params;

    const categoria = await actualizarCategoria(
        id,
        req.body
    );

    res.json(categoria);
};

export const deleteCategoria = async (req, res) => {

    const { id } = req.params;

    const categoria = await eliminarCategoria(id);

    res.json(categoria);
};