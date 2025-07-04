const User = require('../models/user');

exports.postLogin = async (req, res, next) => {
    const {username, password} = req.body;
    // const user = new User({firstName: "Sample", lastName: "User", username, password, userType: 'user'});
    // await user.save();
    const user = await User.findOne({username})
    if(!user) {
        return res.status(401).json({ message: "Incorrect Username or Password" });
    }
    const isMatch = user.password === password ? true : false;
    if(!isMatch) {
        return res.status(401).json({ message: "Incorrect Username or Password" });
    }
    return res.status(200).json({ message: "ok", userType: user.userType });
}