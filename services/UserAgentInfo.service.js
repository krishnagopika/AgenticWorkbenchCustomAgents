const userAgentInfo = require('../models/UserAgentInfo')



/**
 * Creates or Updates User Agent Info
 * @param {Object} userAgentInfo
 * @returns {Promise<Object} -> created or updated userAgentInfo Object
 */

const createOrUpdateUserAgentInfo = async (userAgentInfoReq) => {
    console.log(userAgentInfoReq);
    return await userAgentInfo.createOrUpdateUserAgentInfo(userAgentInfoReq);
};

const getUserAgentInfo = async (user_id, agent_id) => {
    const doc = await userAgentInfo.getUserAgentInfo(user_id, agent_id);
  
    if (!doc || !doc.fields) return doc;
  
    const updatedFields = doc.fields.map(field => ({
      ...field,
      value: field.type === 'encrypted' ? true : field.value
    }));
  
    return {
      ...doc,
      fields: updatedFields
    };
  };
  


module.exports = {
    createOrUpdateUserAgentInfo,
    getUserAgentInfo,
};