const mongoose = require('mongoose');
const agentHistorySchema = require('./schema/history'); // Make sure the path is correct

const AgentHistory = mongoose.model('AgentHistory', agentHistorySchema);

// Create new history entry
const createAgentHistory = async (historyData) => {
  return (await AgentHistory.create(historyData)).toObject();
};

// Get history for a specific user and agent
const getAgentHistory = async ({ user_id, agent_id }) => {
  return AgentHistory.findOne({ user_id, agent_id }).lean();
};

// Update history (e.g., push a new history item)
const addAgentHistoryEntry = async ({ user_id, agent_id }, newEntry) => {
  return AgentHistory.findOneAndUpdate(
    { user_id, agent_id },
    { $push: { history: newEntry } },
    { new: true, upsert: true } // Upsert in case history doc doesn't exist
  ).lean();
};

// Delete all history for a user and agent
const deleteAgentHistory = async ({ user_id, agent_id }) => {
  return AgentHistory.findOneAndDelete({ user_id, agent_id });
};

// List all history entries for a given user
const listUserHistory = async (user_id) => {
  return AgentHistory.find({ user_id }).lean();
};

module.exports = {
  AgentHistory,
  createAgentHistory,
  getAgentHistory,
  addAgentHistoryEntry,
  deleteAgentHistory,
  listUserHistory,
};
