const agentHistoryModel = require('../models/History'); // Adjust the path as needed

/**
 * Creates a new agent history document.
 * @param {Object} historyData - Initial data for the history document.
 * @returns {Promise<Object>} - Created history object.
 */
const createAgentHistory = async (historyData) => {
  return await agentHistoryModel.createAgentHistory(historyData);
};

/**
 * Retrieves agent history for a specific user and agent.
 * @param {Object} filter - Contains `user_id` and `agent_id`.
 * @returns {Promise<Object|null>} - The found history document or null.
 */
const getAgentHistory = async (filter) => {
  return await agentHistoryModel.getAgentHistory(filter);
};

/**
 * Adds a new entry to the agent history log.
 * @param {Object} filter - Contains `user_id` and `agent_id`.
 * @param {Object} entry - New history entry with `timestamp`, `action`, `description`.
 * @returns {Promise<Object>} - Updated history document.
 */
const addAgentHistoryEntry = async (filter, entry) => {
  return await agentHistoryModel.addAgentHistoryEntry(filter, entry);
};

/**
 * Deletes agent history for a specific user and agent.
 * @param {Object} filter - Contains `user_id` and `agent_id`.
 * @returns {Promise<Object|null>} - Deleted history document or null.
 */
const deleteAgentHistory = async (filter) => {
  return await agentHistoryModel.deleteAgentHistory(filter);
};

/**
 * Lists all agent histories for a user.
 * @param {String} user_id - The user's ID.
 * @returns {Promise<Array>} - Array of history documents.
 */
const listUserHistory = async (user_id) => {
  return await agentHistoryModel.listUserHistory(user_id);
};

module.exports = {
  createAgentHistory,
  getAgentHistory,
  addAgentHistoryEntry,
  deleteAgentHistory,
  listUserHistory,
};
