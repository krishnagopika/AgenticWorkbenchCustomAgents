const mongoose = require('mongoose');

const agentHistorySchema = new mongoose.Schema(
  {
    user_id: {
      type: String, // Changed from ObjectId to String
      required: true,
    },
    agent_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CustomAgent', // Replace with actual model name if different
      required: true,
    },
    history: [
      {
        timestamp: {
          type: Date,
          default: Date.now,
        },
        action: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports =  {agentHistorySchema,};
