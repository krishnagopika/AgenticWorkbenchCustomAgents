const customAgentModel = require('../models/CustomAgent'); // Import the model file

/**
 * Creates a new custom agent.
 * @param {Object} customAgentData - Data for the new custom agent.
 * @returns {Promise<Object>} - Created custom agent object.
 */
const createCustomAgent = async (customAgentData) => {
  return await customAgentModel.createCustomAgent(customAgentData);
};

/**
 * Retrieves a custom agent by search criteria.
 * @param {Object} searchParameter - The search filter.
 * @returns {Promise<Object|null>} - The found custom agent or null.
 */
const getCustomAgent = async (searchParameter) => {
  return await customAgentModel.getCustomAgent(searchParameter);
};

/**
 * Loads a custom agent and ensures authorization.
 * @param {Object} params - Request object containing `req` and `agent_id`.
 * @returns {Promise<Object>} - The found custom agent.
 * @throws {Error} - Throws an error if the agent is not found or unauthorized.
 */
const loadAgent = async ({ req, agent_id }) => {
  const customAgent = await customAgentModel.getCustomAgent({ id: agent_id });

  if (!customAgent) {
    throw new Error('Agent not found');
  }

  if (customAgent.author.toString() !== req.user.id) {
    throw new Error('Unauthorized access');
  }

  return customAgent;
};

/**
 * Updates a custom agent.
 * @param {Object} searchParameter - The search filter.
 * @param {Object} updateData - The fields to update.
 * @returns {Promise<Object|null>} - The updated custom agent or null.
 */
const updateCustomAgent = async (searchParameter, updateData) => {
  return await customAgentModel.updateCustomAgent(searchParameter, updateData);
};

/**
 * Deletes a custom agent.
 * @param {Object} searchParameter - The search filter.
 * @returns {Promise<Object|null>} - The deleted custom agent or null.
 */
const deleteCustomAgent = async (searchParameter) => {
  return await customAgentModel.deleteCustomAgent(searchParameter);
};

/**
 * Retrieves a list of custom agents by filter.
 * @param {Object} searchParameter - The search filter.
 * @returns {Promise<Array>} - An array of custom agents.
 */
const getListCustomAgents = async (searchParameter) => {
  return await customAgentModel.getListCustomAgents(searchParameter);
};

module.exports = {
  createCustomAgent,
  getCustomAgent,
  loadAgent,
  updateCustomAgent,
  deleteCustomAgent,
  getListCustomAgents,
};
