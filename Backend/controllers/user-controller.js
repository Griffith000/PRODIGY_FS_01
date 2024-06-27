const costumError = require("../utils/error");
const User = require("../models/user-model");
const bcryptjs = require("bcryptjs");
const test = (req, res) => {
  res.json({ response: "Api woking!" });
};

const updateUser = async (req, res,next) => {
  if(req.user.id !== req.params.id){
    return next(costumError( 401,"Unauthorized"));
  }
  try{
    if(req.body.password){
      req.body.password =  bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, 
      {
        $set: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profilePicture: req.body.profilePicture,
        }
      },{new: true});
      const {password, ...others} = updatedUser._doc;// remove password from the response
    res.status(200).json(others);
      }
  catch(err){
    next(err);
  }
}

module.exports = {test, updateUser};
