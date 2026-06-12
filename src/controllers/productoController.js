import {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} from "../models/productoModel.js";

export const getProductos = async (req, res) => {
    try {
        const productos = await obtenerProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener productos",
            error: error.message
        });
    }
};

export const getProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await obtenerProductoPorId(id);

        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener producto",
            error: error.message
        });
    }
};

export const postProducto = async (req, res) => {
    try {
        const producto = await crearProducto(req.body);
        res.status(201).json(producto);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al crear producto",
            error: error.message
        });
    }
};

export const putProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await actualizarProducto(id, req.body);

        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al actualizar producto",
            error: error.message
        });
    }
};

export const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await eliminarProducto(id);

        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        res.json({ mensaje: "Producto eliminado correctamente", producto });
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al eliminar producto",
            error: error.message
        });
    }
};