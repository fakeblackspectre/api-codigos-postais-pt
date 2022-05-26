const express = require('express');
const codigoPostalController = require('../../controllers/codigoPostal.controller');
// const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/').get(codigoPostalController.getCodigosPostais);
router.route('/codigo/').get(codigoPostalController.getCodigoPostal);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Codigos Postais
 *   description: Obter dados de codigos postais
 */

/**
 * @swagger
 * /codigos_postais:
 *   get:
 *     summary: Obter lista paginada de códigos postais
 *     description: Não é necessário estar autenticado.
 *     tags: [codigos_postais]
 *     parameters:
 *       - in: query
 *         name: cod_distrito
 *         schema:
 *           type: string
 *         description: Código do distrito
 *       - in: query
 *         name: cod_concelho
 *         schema:
 *           type: string
 *         description: Código do concelho
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Número máximo de códigos postais
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Número da página
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CodigoPostal'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 */

/**
 * @swagger
 * /codigos_postais/codigo:
 *   get:
 *     summary: Obter um código postal
 *     description: Não é necessário estar autenticado.
 *     tags: [codigos_postais]
 *     parameters:
 *       - in: query
 *         name: num_cod_postal
 *         required: true
 *         schema:
 *           type: integer
 *         description: Primeira parte do código postal
 *       - in: query
 *         name: ext_cod_postal
 *         required: true
 *         schema:
 *           type: integer
 *         description: Segunda parte do código postal
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/CodigoPostal'
 */
