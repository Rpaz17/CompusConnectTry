/**
 * @swagger
 * components:
 *   schemas:
 *     usuarios:
 *       type: object
 *       required:
 *         - nombre
 *         - correo
 *         - password
 *         - carrera
 *         - foto
 *       properties:
 *        id:
 *          type: integer
 *          description: The auto-generated id of the user
 *        nombre:
 *          type: string
 *          description: The name of the user
 *        correo:
 *          type: string
 *          description: The email of the user without repetition
 *        password:
 *          type: string
 *          description: The password of the user
 *        carrera:
 *          type: string
 *          description: The career of the user
 *        foto:
 *          type: string
 *          description: Profile picture of the user
 */
/**
 * @swagger
 * tags:
 *  name: usuarios
 *  description: Los API-endpoints para gestionar los usuarios
 * /users/:
 *  post:
 *    summary: Crear un nuevo usuario
 *    tags: [usuarios]
 *    requestBody:
 *      content:
 *        application/x-www-form-urlencoded:
 *         schema:
  *          type: object
  *          properties:
  *            nombre:
  *              type: string
  *              description: Nombre del usuario
  *            correo:
  *              type: string
  *              description: Correo del usuario
  *            password:
  *              type: string
  *              description: Contraseña del usuario
  *            carrera:
  *              type: string
  *              description: Carrera del usuario
  *            foto:
  *              type: string 
  *              description: Foto del usuario
*          required:
*            - nombre
*            - correo
*            - password
*            - carrera
*            - foto
  *        responses:
  *          201: 
  *            description: Usuario creado con éxito
  *            content:
  *              application/json:
  *                schema:
  *                  type: object
  *                  properties:
  *                    status:
  *                      type: string
  *                    data:
  *                      type: array
  *                      items: 
  *                        $ref: '#/components/schemas/usuarios'
 */

//swagger para crear publicaciones
/**
 * @swagger
 * tags:
 *  name: publicaciones
 *  description: Los API-endpoints para gestionar las publicaciones
 * /posts/:
 * post:
 *   summary: Crear una nueva publicación
 *  tags: [publicaciones]
 *  requestBody:
 *   content:
 *    application/x-www-form-urlencoded:
 *    schema:
 *     type: object
 *    properties:
 *     usuarioId:
 *      type: integer
 *     description: ID del usuario que crea la publicación
 *    titulo:
 *    type: string
 *   description: Título de la publicación
 *   contenido:
 *  type: string
 * description: Contenido de la publicación
 *  categoria:
 * type: string
 * description: Categoría de la publicación
 * fecha:
 * type: string
 * description: Fecha de la publicación
 * required:
 *  - usuarioId
 *  - titulo
 *  - contenido
 *  - categoria
 *  - fecha
 *   responses:
 *   201:
 *   description: Publicación creada con éxito
 *  content:
 *   application/json:
 *  schema:
 *  type: object
 * properties:
 * status:
 * type: string
 * data:
 * type: array
 * items:
 * $ref: '#/components/schemas/publicaciones'
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
