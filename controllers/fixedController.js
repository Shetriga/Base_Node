const User = require("../models/user");

exports.getFixedController = async (req, res, next) => {
  try {
    const foundUsers = await User.find({});
    if (!foundUsers) {
      return res.sendStatus(404);
    }

    // Now we know we got the users, Could add another check if foundusers length is zero also return 404
    // But we will ignore this for now
    res.status(200).json({
      foundUsers,
    });
  } catch (e) {
    const error = new Error(e.message);
    error.statusCode = 500;
    return next(error);
  }
};
