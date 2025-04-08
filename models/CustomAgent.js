const mongoose = require('mongoose');
const customAgentSchema = require('./schema/customAgent');

const CustomAgent = mongoose.model('customAgent', customAgentSchema);


// create custom agent
const createCustomAgent = async (customAgentData) => {
    return (await CustomAgent.create(customAgentData)).toObject();
}

// get custom agent document

const getCustomAgent = async (searchParameter) => await CustomAgent.findOne(searchParameter).lean();


const loadAgent = async ({ req, agent_id }) => {
  const customAgent = await getCustomAgent({
    id: agent_id,
  });
  if (agent.author.toString() === req.user.id) {
    return customAgent;
  }}

  // update agent

  const updateCustomAgent = async (searchParameter, updateData) => {
    const options = { new: true, upsert: false };
    return CustomAgent.findOneAndUpdate(searchParameter, updateData, options).lean();
  };

  // delete agent

  const deleteCustomAgent = async (searchParameter) => {
    const customAgent = await CustomAgent.findOneAndDelete(searchParameter);
    return customAgent;
  };

  const getListCustomAgents = async (searchParameter) => {
    const { author, ...otherParams } = searchParameter;
    let query = {...otherParams};

    return CustomAgent.find(query).lean();
  };

  module.exports = {
    CustomAgent,
    createCustomAgent,
    getCustomAgent,
    updateCustomAgent,
    deleteCustomAgent,
    getListCustomAgents,
    loadAgent,
  };


