const User = require("../models/User");
const StatusCodes = require("http-status-codes");
const deleteUsers = async (req, res) => {
    const resp = await User.deleteMany({});
    res.status(StatusCodes.OK).json(resp);
};

module.exports = { deleteUsers };
