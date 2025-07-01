import mongoose from "mongoose";


const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,// Ensure company names are unique
    },
    description: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    location: {
        type: String,
    },
    logo:{
        type: String, // URL or path to the logo file
    },
    userId:[{
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: "User",
        required: true
    }],
}, { timestamps: true   
});

export const Company = mongoose.model("Company", companySchema);
