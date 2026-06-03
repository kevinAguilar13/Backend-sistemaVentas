import {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} from "../models/productoModel.js";

export const getProductos = async (req, res) => {

    const productos = await obtenerProductos();

    res.json(productos);
};

export const getProducto = async (req, res) => {

    const { id } = req.params;

    const producto = await obtenerProductoPorId(id);

    res.json(producto);
};

export const postProducto = async (req, res) => {

    const producto = await crearProducto(req.body);

    res.status(201).json(producto);
};

export const putProducto = async (req, res) => {

    const { id } = req.params;

    const producto = await actualizarProducto(
        id,
        req.body
    );

    res.json(producto);
};

export const deleteProducto = async (req, res) => {

    const { id } = req.params;

    const producto = await eliminarProducto(id);

    res.json(producto);
};