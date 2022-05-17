const express = require('express');
const concelhoController = require('../../controllers/concelho.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/').get(auth('getConcelhos'), concelhoController.getConcelhos);
router.route('/concelho/').get(concelhoController.getConcelho);

module.exports = router;
