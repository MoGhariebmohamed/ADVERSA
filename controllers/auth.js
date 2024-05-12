import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/user.js";
import { use } from "bcrypt/promises.js";

/* the register function */
export const register = async(req, res) => {
try {
  const {
    firstName,
    lastName,
    password,
    email,
    picture,
    friends,
    location,
    influencerContact,
  } = req.body;
const salt = await bcrypt.genSalt();
const passwordHashing = await bcrypt.hash(password, salt);

const newUser = new user({
    firstName,
    lastName,
    password: passwordHashing,
    email,
    picture,
    friends,
    location,
    influencersFollowers:  Math.floor(Math.random() * 1000),
    viewedProfile: Math.floor(Math.random() * 1000),
    influencerContact
});
const savedUser = await newUser.save();
res.status(201).json(savedUser);   
} } catch (err) {
}
}