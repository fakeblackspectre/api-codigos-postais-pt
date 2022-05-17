const express = require('express');
const distritoController = require('../../controllers/distrito.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/').get(auth('getDistritos'), distritoController.getDistritos);
// router.route('/:codigo').get(distritoController.getDistrito);

module.exports = router;
