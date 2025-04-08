const userAgentInfoService = require('../services/UserAgentInfo.service')

/**
 * Creates or Updates userAgentInfo
 */

const createOrUpdateUserAgentInfo = async(req, res) => {
    try {
        const user_id = req.cookies.user_id;
    if (!user_id) {
      return res.status(401).json({ message: 'Unauthorized: Missing user_id cookie' });
    }
    req.body.user_id = user_id;

    console.log(req.body)
        const userAgentInfo = await userAgentInfoService.createOrUpdateUserAgentInfo(req.body);
        res.status(200).json(userAgentInfo);
    }
    catch (error) {
        res.status(500).json({ message: error });
        }
};

const getUserAgentInfo = async(req, res) => {
    try {
        const user_id = String(req.cookies.user_id);
    if (!user_id) {
      return res.status(401).json({ message: 'Unauthorized: Missing user_id cookie' });
    }
    const agent_id = String(req.params.agent_id);
    const userAgentInfo = await userAgentInfoService.getUserAgentInfo(user_id, agent_id);
    res.status(200).json(userAgentInfo);
    }
    catch (error) {
        res.status(500).json({ message: String(error) });
        }
};

module.exports = {
    createOrUpdateUserAgentInfo,
    getUserAgentInfo,
};