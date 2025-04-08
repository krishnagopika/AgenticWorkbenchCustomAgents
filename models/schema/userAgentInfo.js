const mongoose = require('mongoose');



// Schema for User Agent Info

const agentFieldSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: String,
    value: { type: String, required: true},
}, {_id: false})

const userAgentInfoSchema = new mongoose.Schema(
    {
        user_id: {
            type: String,
            index: true,
            required: true,
        },
        agent_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CustomAgent',
            required: true,
        },
        fields: [agentFieldSchema],


    }, {_id: true}
);

module.exports = userAgentInfoSchema;