const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");


const verifyEmail = async (req, res) => {
    const { verifyCode } = req.params;
    const user = await User.findOne({ verifyCode });

    if (!user) {
        throw HttpError(404, "User not Found");
    }

    await User.findByIdAndUpdate(user._id, { verify: true, verifyCode: "" })
    
    res.status(201).json({
        message: "Email verufy success"
    })
}

module.exports = {
    verifyEmail: ctrlWrapper(verifyEmail)
}