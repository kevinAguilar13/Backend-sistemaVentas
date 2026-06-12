import { Router } from "express";
import {
    getDetalles,
    getDetalle,
    getDetallesPorPedido,
    postDetalle,
    putDetalle,
    deleteDetalle
} from "../controllers/detallePedidoController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: DetallePedido
 *   description: Gestión de detalles de pedidos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DetallePedido:
 *       type: object
 *       properties:
 *         id_detalle:
 *           type: integer
 *         id_pedido:
 *           type: integer
 *         id_producto:
 *           type: integer
 *         cantidad:
 *           type: integer
 *         precio_unitario:
 *           type: number
 *       required:
 *         - id_pedido
 *         - id_producto
 *         - cantidad
 *         - precio_unitario
 */

/**
 * @swagger
 * /api/detalle-pedido:
 *   get:
 *     summary: Obtener todos los detalles de pedido
 *     tags: [DetallePedido]
 *     responses:
 *       200:
 *         description: Lista de detalles
 */
router.get("/", getDetalles);

/**
 * @swagger
 * /api/detalle-pedido/{id}:
 *   get:
 *     summary: Obtener un detalle por ID
 *     tags: [DetallePedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle encontrado
 *       404:
 *         description: Detalle no encontrado
 */
router.get("/:id", getDetalle);

/**
 * @swagger
 * /api/detalle-pedido/pedido/{id_pedido}:
 *   get:
 *     summary: Obtener detalles por ID de pedido
 *     tags: [DetallePedido]
 *     parameters:
 *       - in: path
 *         name: id_pedido
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de detalles del pedido
 */
router.get("/pedido/:id_pedido", getDetallesPorPedido);

/**
 * @swagger
 * /api/detalle-pedido:
 *   post:
 *     summary: Crear un nuevo detalle de pedido
 *     tags: [DetallePedido]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DetallePedido'
 *     responses:
 *       201:
 *         description: Detalle creado exitosamente
 *       500:
 *         description: Error al crear detalle
 */
router.post("/", postDetalle);

/**
 * @swagger
 * /api/detalle-pedido/{id}:
 *   put:
 *     summary: Actualizar un detalle de pedido
 *     tags: [DetallePedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DetallePedido'
 *     responses:
 *       200:
 *         description: Detalle actualizado
 *       404:
 *         description: Detalle no encontrado
 */
router.put("/:id", putDetalle);

/**
 * @swagger
 * /api/detalle-pedido/{id}:
 *   delete:
 *     summary: Eliminar un detalle de pedido
 *     tags: [DetallePedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle eliminado
 *       404:
 *         description: Detalle no encontrado
 */
router.delete("/:id", deleteDetalle);

export default router;
