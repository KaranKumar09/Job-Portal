import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['Student', 'Recruiter'],
        default: 'Student',
        required: true,
    },
    profile:{
        bio:{
            type: String,
        },
        skills: [{
            type: String,
        }],
        resume:{
            type: String, // URL or path to the resume file
        },
        resumeFilename: {
            type: String, // To store original name of the resume 
        },
        company: {
            type: mongoose.Schema.Types.ObjectId, // To store original name of the resume file
            ref: "Company",
        },
        profilePhoto:{
            type: String, // URL or path to the profile photo
            default: "",
        },
    },
},{timestamps: true});

export const User = mongoose.model("User", userSchema);