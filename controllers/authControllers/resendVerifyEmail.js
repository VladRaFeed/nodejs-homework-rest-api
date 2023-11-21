const { ctrlWrapper, HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models/user");

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        throw HttpError(401, "Email not found");
    }

    if (user.verify) {
        throw HttpError(401, "Email already verify");
    }

    const verifyEmail = {
    to: email,
    subject: "Verify Email",
    html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${user.verifyCode}">Click to verify email</a>`
    };
    
    await sendEmail(verifyEmail);

    res.status(200).json({
        message: "Verification email sent"
    })

}

module.exports = {
    resendVerifyEmail: ctrlWrapper(resendVerifyEmail)
}