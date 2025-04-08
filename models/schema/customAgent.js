const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Schema for dynamic form fields
const fieldSchema = new mongoose.Schema({
  field_name: { type: String, required: true },
  field_type: {
    type: String,
    enum: ['text', 'checkbox', 'select', 'number', 'radio', 'longtext'],
    required: true,
  },
  options: { type: [String], default: undefined },
  default_value: mongoose.Schema.Types.Mixed,
  required: { type: Boolean, default: false },
}, { _id: false });

// Schema for individual actions
const actionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  fields: [fieldSchema],
}, { _id: false });

// Config schema containing global fields and actions
const configSchema = new mongoose.Schema({
  fields: [fieldSchema],     // global fields like Personal Access Token, Actions (radio)
  actions: [actionSchema],   // individual action blocks like Project Creation, PR Comments, etc.
}, { _id: false });

const customAgentSchema = mongoose.Schema(
  {
    id: {
      type: String,
      index: true,
      unique: true,
      required: true,
      default: uuidv4,
    },
    name: { type: String },
    description: { type: String },
    avatar: {
      type: {
        filepath: String,
        source: String,
      },
      default: undefined,
    },
    config: {
      type: configSchema,
      default: {},
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    authorName: {
      type: String,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = customAgentSchema;
