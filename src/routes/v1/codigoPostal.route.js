const express = require('express');
const codigoPostalController = require('../../controllers/codigoPostal.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/').get(auth('getCodigosPostais'), codigoPostalController.getCodigosPostais);
router.route('/codigo/').get(codigoPostalController.getCodigoPostal);

module.exports = router;
