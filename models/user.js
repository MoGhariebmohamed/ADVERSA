import mongoose from "mongoose";

const userInfluencer = new mongoose.Schema(
    {
        firstName: {
            type: String,
            /*required: true,*/
            min: 2,
            max:50,
        },
        lastName: {
            type: String,
            /*required: true,*/
            min: 2,
            max:50,
        },
        password: {
            type: String,
            /*required: true,*/
            min: 8,
            max:60,
        },
        email: {
            type: String,
            /*required: true,*/
            unique: true,
            min: 2,
            max:50,
        },
        picture: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: [],
        },
        location: {
            Type: String,
            /*required: true,*/
        },
        influencersFollowers: Number,
        viewedProfile: Number,
        influencerContact: Number,
    },
       { timestamps: true } 
);
const userSchema = mongoose.model("userSchema", userInfluencer);
export default userSchema;