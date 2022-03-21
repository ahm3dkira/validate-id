
const validateID = (req, res, next) => {
    const ObjectId = require("mongoose").Types.ObjectId;
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }
    next();
};

module.exports = validateID;