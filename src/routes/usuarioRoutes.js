import { Router } from "express";
import * as usuarioController from "../controllers/usuarioController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API para la gestión de usuarios
 */

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get("/", usuarioController.getUsuarios);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *       404:
 *         description: Usuario no encontrado
 */
router.get("/:id", usuarioController.getUsuario);

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Registrar un usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_rol
 *               - nombre
 *               - apellido
 *               - email
 *               - password
 *             properties:
 *               id_rol:
 *                 type: integer
 *                 example: 1
 *               nombre:
 *                 type: string
 *                 example: Kevin
 *               apellido:
 *                 type: string
 *                 example: Aguilar
 *               email:
 *                 type: string
 *                 example: kevin@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               estado:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 */
router.post("/", usuarioController.postUsuario);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     summary: Actualizar un usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_rol:
 *                 type: integer
 *                 example: 1
 *               nombre:
 *                 type: string
 *                 example: Kevin
 *               apellido:
 *                 type: string
 *                 example: Aguilar
 *               email:
 *                 type: string
 *                 example: kevin@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               estado:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", usuarioController.putUsuario);

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.delete("/:id", usuarioController.deleteUsuario);

export default router;