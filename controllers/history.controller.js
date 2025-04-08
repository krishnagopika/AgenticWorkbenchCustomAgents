const historyService = require('../services/History.service');

/**
 * Creates a new history document for a custom agent.
 */
const createAgentHistory = async (req, res) => {
  try {
    const history = await historyService.createAgentHistory(req.body);
    res.status(201).json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Retrieves agent history by user ID and agent ID.
 */
const getAgentHistory = async (req, res) => {
  try {
    const { user_id, agent_id } = req.params;
    const history = await historyService.getAgentHistory({ user_id, agent_id });

    if (!history) {
      return res.status(404).json({ message: 'History not found' });
    }

    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Adds a new entry to the agent history.
 */
const addAgentHistoryEntry = async (req, res) => {
  try {
    const { user_id, agent_id } = req.params;
    const entry = req.body;
    const updatedHistory = await historyService.addAgentHistoryEntry({ user_id, agent_id }, entry);

    res.status(200).json(updatedHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Deletes an agent's history.
 */
const deleteAgentHistory = async (req, res) => {
  try {
    const { user_id, agent_id } = req.params;
    const deletedHistory = await historyService.deleteAgentHistory({ user_id, agent_id });

    if (!deletedHistory) {
      return res.status(404).json({ message: 'History not found' });
    }

    res.status(200).json({ message: 'History deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Lists all agent histories for a user.
 */
const listUserHistory = async (req, res) => {
  try {
    const { user_id } = req.params;
    const historyList = await historyService.listUserHistory(user_id);
    res.status(200).json(historyList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAgentHistory,
  getAgentHistory,
  addAgentHistoryEntry,
  deleteAgentHistory,
  listUserHistory,
};
