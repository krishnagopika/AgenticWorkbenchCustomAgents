const express = require('express');
const router = express.Router();
const customAgentController = require('../controllers/customAgent.controller');

// Define CRUD routes
router.post('/', customAgentController.createCustomAgent);    // Create
router.get('/:id', customAgentController.getCustomAgent);     // Read (Single)
router.get('/', customAgentController.getListCustomAgents);   // Read (List)
router.put('/:id', customAgentController.updateCustomAgent);  // Update
router.delete('/:id', customAgentController.deleteCustomAgent); // Delete

module.exports = router;
