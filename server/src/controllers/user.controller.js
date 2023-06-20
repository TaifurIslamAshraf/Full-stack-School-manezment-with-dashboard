const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");
const { errorMessage } = require("../middlewares/error");
const sendToken = require("../helpers/jwtToken");

//register user
const register = asyncHandler(async (req, res, next) => {
  const { fullName, email, password, phone } = req.body;
  if (!fullName || !password || !phone) {
    return next(errorMessage(res, 400, "All field are required"));
  }
  if (email) {
    email: null;
  }

  // Normalize the phone number
  let normalizedPhone = phone;
  if (normalizedPhone.startsWith("+88")) {
    normalizedPhone = normalizedPhone.substring(3);
  }

  const isExistPhone = await User.exists({ phone: normalizedPhone });
  let isExistEmail = false;
  if (email) {
    isExistEmail = await User.exists({ email });
  }

  if (isExistPhone) {
    return next(errorMessage(res, 400, "Phone number alredy exists"));
  } else if (isExistEmail) {
    return next(errorMessage(res, 400, "Email alredy exists"));
  }

  let user;
  if (email) {
    user = await User.create({
      fullName,
      email,
      password,
      phone: normalizedPhone,
    });
  } else {
    user = await User.create({ fullName, password, phone: normalizedPhone });
  }

  sendToken(user, 201, res);
});

//update user role
const updateUserRole = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    return next(errorMessage(res, 400, "User not found"));
  }

  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: "User role updated successfully",
    user,
  });
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return next(errorMessage(res, 400, "Please enter phone and password"));
  }

  let normalizedPhone = phone;
  if (normalizedPhone.startsWith("+88")) {
    normalizedPhone = normalizedPhone.substring(3);
  }

  const user = await User.findOne({ phone: normalizedPhone }).select(
    "+password"
  );

  if (!user) {
    return next(errorMessage(res, 409, "Invalid phone or Password"));
  }

  const isMatchPassword = await user.comparePassword(password);

  if (!isMatchPassword) {
    return next(errorMessage(res, 409, "Invalid phone or Password"));
  }

  sendToken(user, 200, res);
});

//get users
const getUsers = asyncHandler(async (req, res, next) => {
  const search = req.query.search || "";
  const page = req.query.page || 1;
  const limit = Number(req.query.limit) || 10;

  const searchRegExp = new RegExp(".*" + search + ".*", "i");
  const filter = {
    role: { $nin: ["admin", "teacher"] },

    $or: [
      { name: { $regex: searchRegExp } },
      { email: { $regex: searchRegExp } },
      { phone: { $regex: searchRegExp } },
    ],
  };

  const users = await User.find(filter)
    .limit(limit)
    .skip((page - 1) * limit);

  const adminAndTeacher = await User.find({
    role: { $in: ["admin", "teacher"] },
  });

  const numberOfUsers = await User.find(filter).countDocuments();

  if (!users) {
    return next(errorMessage(res, 400, "No User found"));
  }

  res.status(200).json({
    success: true,
    pagination: {
      totalPage: Math.ceil(numberOfUsers / limit),
      currentPage: page,
    },
    adminAndTeacher,
    users,
  });
});

const loadUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

const logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

module.exports = {
  register,
  loginUser,
  logout,
  getUsers,
  updateUserRole,
  loadUser,
};
