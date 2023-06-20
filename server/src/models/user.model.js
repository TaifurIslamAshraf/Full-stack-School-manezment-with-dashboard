const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const config = require("../config/config");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: true,
      validate: [validator.isEmail, ["Please enter a valid email"]],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      minLength: [11, "Password should be at least 11 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password should be at least 6 characters"],
      select: false,
    },
    role: {
      type: String,
      enum: ["student", "admin", "teacher"],
      default: "student",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

//password hash
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

//password compare
userSchema.methods.comparePassword = async function (enterdPassword) {
  return await bcrypt.compare(enterdPassword, this.password);
};

//jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ _id: this._id }, config.jwt.JWT_SECRET_KEY, {
    expiresIn: config.jwt.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("User", userSchema);
