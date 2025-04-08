const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history.controller');

// Route prefix: /history

// Create a new history document
router.post('/', historyController.createAgentHistory);

// Get a specific agent's history for a user
router.get('/:user_id/:agent_id', historyController.getAgentHistory);

// Add an entry to the history of a specific agent
router.put('/:user_id/:agent_id', historyController.addAgentHistoryEntry);

// Delete the history of a specific agent
router.delete('/:user_id/:agent_id', historyController.deleteAgentHistory);

// List all histories for a user
router.get('/user/:user_id', historyController.listUserHistory);

module.exports = router;
