const express = require('express');
const ruaController = require('../../controllers/rua.controller');

const router = express.Router();

router.route('/').get(ruaController.getRuas);
router.route('/rua/').get(ruaController.getRuaByCodigoPostal);

module.exports = router;
