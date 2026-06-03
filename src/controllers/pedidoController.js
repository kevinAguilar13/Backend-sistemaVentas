import {
    obtenerPedidos,
    obtenerPedidoPorId,
    crearPedido,
    actualizarPedido,
    eliminarPedido
} from "../models/pedidoModel.js";

export const getPedidos = async (req, res) => {

    const pedidos = await obtenerPedidos();

    res.json(pedidos);
};

export const getPedido = async (req, res) => {

    const { id } = req.params;

    const pedido = await obtenerPedidoPorId(id);

    res.json(pedido);
};

export const postPedido = async (req, res) => {

    const pedido = await crearPedido(req.body);

    res.status(201).json(pedido);
};

export const putPedido = async (req, res) => {

    const { id } = req.params;

    const pedido = await actualizarPedido(
        id,
        req.body
    );

    res.json(pedido);
};

export const deletePedido = async (req, res) => {

    const { id } = req.params;

    const pedido = await eliminarPedido(id);

    res.json(pedido);
};