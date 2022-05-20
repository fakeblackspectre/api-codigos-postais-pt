const express = require('express');
const concelhoController = require('../../controllers/concelho.controller');

const router = express.Router();

router.route('/').get(concelhoController.getConcelhos);
router.route('/concelho/').get(concelhoController.getConcelho);

module.exports = router;
