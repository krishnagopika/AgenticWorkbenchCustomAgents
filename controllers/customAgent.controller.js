const customAgentService = require('../services/CustomAgent.service');

/**
 * Creates a new custom agent.
 */
const createCustomAgent = async (req, res) => {
  try {
    const customAgent = await customAgentService.createCustomAgent(req.body);
    res.status(201).json(customAgent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Retrieves a single custom agent by ID.
 */
const getCustomAgent = async (req, res) => {
  try {
    const customAgent = await customAgentService.getCustomAgent({ id: req.params.id });

    if (!customAgent) {
      return res.status(404).json({ message: 'Custom agent not found' });
    }

    res.status(200).json(customAgent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Retrieves a list of custom agents.
 */
const getListCustomAgents = async (req, res) => {
  try {
    const customAgents = await customAgentService.getListCustomAgents(req.query);
    res.status(200).json(customAgents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Updates an existing custom agent.
 */
const updateCustomAgent = async (req, res) => {
  try {
    const updatedAgent = await customAgentService.updateCustomAgent(
      { id: req.params.id },
      req.body
    );

    if (!updatedAgent) {
      return res.status(404).json({ message: 'Custom agent not found' });
    }

    res.status(200).json(updatedAgent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Deletes a custom agent.
 */
const deleteCustomAgent = async (req, res) => {

  console.log("🧹 Delete endpoint hit. ID:", req.params.id); // <---- add this

  try {
    const deletedAgent = await customAgentService.deleteCustomAgent({ id: req.params.id });

    if (!deletedAgent) {
      return res.status(500).json({ message: 'Custom agent not found' + req.params.id});
    }

    res.status(200).json({ message: 'Custom agent deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message + req.params.id });
  }
};

module.exports = {
  createCustomAgent,
  getCustomAgent,
  getListCustomAgents,
  updateCustomAgent,
  deleteCustomAgent,
};
