const mongoose = require('mongoose');

const userAgentInfoSchema = require('./schema/userAgentInfo')

const UserAgentInfo = mongoose.model('userAgentInfo', userAgentInfoSchema);



// create or update user agent info
const createOrUpdateUserAgentInfo = async ( userAgentInfoReq) => {

  const user_id = userAgentInfoReq.user_id;
  const agent_id = userAgentInfoReq.agent_id;
  const fields = userAgentInfoReq.fields;

    try {
        // Check if a document exists
  let existing = await UserAgentInfo.findOne({ user_id, agent_id });

  if (!existing) {
    // Create new document
    const newDoc = new UserAgentInfo({ user_id, agent_id, fields });
    await newDoc.save();
    return { data: newDoc, wasNew: true };
  }

  // Update logic: merge/update fields dynamically
  const updatedFieldsMap = new Map(fields.map(f => [f.name, f]));

  // Retain or update existing fields
  let mergedFields = existing.fields.reduce((acc, curr) => {
    if (updatedFieldsMap.has(curr.name)) {
      acc.push(updatedFieldsMap.get(curr.name)); // replace
      updatedFieldsMap.delete(curr.name);
    } else {
      acc.push(curr); // keep
    }
    return acc;
  }, []);

  // Add any new fields that didn't exist before
  mergedFields = [...mergedFields, ...updatedFieldsMap.values()];

  // Update the document
  existing.fields = mergedFields;
  await existing.save();

  return { data: existing, wasNew: false };
    } catch (err) {
        console.error('Error in createOrUpdateUserAgentInfo:', err);
        throw err;
    }
};

const getUserAgentInfo = async (user_id, agent_id) => {

  console.log('Querying with:', { user_id, agent_id: new mongoose.Types.ObjectId(agent_id) });


    try {

        return await UserAgentInfo.findOne({ user_id: user_id, agent_id: new mongoose.Types.ObjectId(agent_id) }).lean();
    } catch (err) {
        console.error('Error in getUserAgentInfo:', err);
        throw err;
    }
};



module.exports = {
    UserAgentInfo,
    createOrUpdateUserAgentInfo,
    getUserAgentInfo,
};