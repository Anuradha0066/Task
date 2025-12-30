import User from "../models/User.js";

export const updateProfile = async (req, res) => {
  const user = await User.findById(req.user.id);

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  const updatedUser = await user.save();
  res.json(updatedUser);
};
