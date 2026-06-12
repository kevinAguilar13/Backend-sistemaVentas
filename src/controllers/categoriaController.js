import {
    obtenerCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
} from "../models/categoriaModel.js";

export const getCategorias = async (req, res) => {
    try {
        const categorias = await obtenerCategorias();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener categorías",
            error: error.message
        });
    }
};

export const getCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await obtenerCategoriaPorId(id);

        if (!categoria) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        res.json(categoria);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener categoría",
            error: error.message
        });
    }
};

export const postCategoria = async (req, res) => {
    try {
        const categoria = await crearCategoria(req.body);
        res.status(201).json(categoria);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear categoría",
            error: error.message
        });
    }
};

export const putCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await actualizarCategoria(id, req.body);

        if (!categoria) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        res.json(categoria);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar categoría",
            error: error.message
        });
    }
};

export const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await eliminarCategoria(id);

        if (!categoria) {
            return res.status(404).json({ mensaje: "Categoría no encontrada" });
        }

        res.json({ mensaje: "Categoría eliminada correctamente", categoria });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar categoría",
            error: error.message
        });
    }
};