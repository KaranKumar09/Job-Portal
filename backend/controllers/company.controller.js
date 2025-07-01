import {Company} from '../models/company.model.js';

export const registerCompany = async (req, res) => {
    try{
        const {companyName,description} = req.body;
        if(!companyName) {
            return res.status(400).json({
                message: "Company name is required",
                success: false,
            });
        }
        if(!description) {
            return res.status(400).json({
                message: "Company description is required",
                success: false,
            });
        }
        let company = await Company.findOne({name: companyName});
        if(company){
            return res.status(400).json({
                message: "Company already exists",
                success: false,
            });
        }
        company = await Company.create({
            name: companyName,
            description,
            userId : req.id, // Assuming req.id is set by authentication middleware
            
        });
        return res.status(201).json({
            message: `Company registered successfully`,
            company,
            success: true,
        });
    }catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error registering company",
            success: false,
        });
    }
}
export const getAllCompanies = async (req, res) => {
    try{
        const userId = req.id;
        const companies = await Company.find({userId});
        if(!companies || companies.length === 0){
            return res.status(404).json({
                message: "No companies found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Companies found",
            companies,
            success: true,
        });
    }catch (error){
        console.error(error);
        res.status(500).json({
            message: "Server Error fetching companies",
            success: false,
        });
    }
}

export const getCompanyById = async (req, res) => {
    try{
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if(!company){
            return res.status(404).json({
                message: "Company not found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Company found",
            company,
            success: true,
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            message: "Server Error fetching company",
            success: false,
        });
    }
}

export const updateCompany = async (req, res) => {
    try{
        const {name, description, website, location} = req.body;
        const file = req.file; //middleware should set req.file
        //cloudinary upload
        const updateData = {name, description, website, location};
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {new: true});
        if(!company){
            return res.status(404).json({
                message: "Company not found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Company updated successfully",
            company,
            success: true,
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            message: "Server Error updating company",
            success: false,
        });
    }
}