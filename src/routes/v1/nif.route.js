const express = require('express');
const nifController = require('../../controllers/nif.controller');

const router = express.Router();

router.route('/').get(nifController.getNif);
router.route('/external').get(nifController.getNifFromExternalSource);

module.exports = router;
