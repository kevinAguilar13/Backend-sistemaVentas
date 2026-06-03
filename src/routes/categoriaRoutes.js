import { Router } from "express";

import {
    getCategorias,
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
} from "../controllers/categoriaController.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Categoria:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         id_categoria:
 *           type: integer
 *           description: ID autogenerado
 *         nombre:
 *           type: string
 *           description: Nombre de la categoría
 *         descripcion:
 *           type: string
 *           description: Descripción de la categoría
 *
 * tags:
 *   name: Categorias
 *   description: API para gestión de categorías
 */

/**
 * @swagger
 * /api/categorias:
 *   get:
 *     summary: Retorna la lista de todas las categorías
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorías obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 */
router.get("/", getCategorias);

router.get("/:id", getCategoria);

router.post("/", postCategoria);

router.put("/:id", putCategoria);

router.delete("/:id", deleteCategoria);

export default router;