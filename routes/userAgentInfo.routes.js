const express = require('express');
const router = express.Router();
const userAgentInfoController = require('../controllers/userAgentInfo.controller')

// Define CRUD routes

router.post('/', userAgentInfoController.createOrUpdateUserAgentInfo);
router.get('/:agent_id', userAgentInfoController.getUserAgentInfo);


module.exports = router;