const express = require('express');
const distritoController = require('../../controllers/distrito.controller');

const router = express.Router();

router.route('/').get(distritoController.getDistritos);
router.route('/distrito/').get(distritoController.getDistrito);

module.exports = router;
