import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import { response } from "express";
import fs from "fs"

 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });


const uploadOnCloudinary = async (localFilePath) => {
    try{
        if (!localFilePath){ return null
            //upload file from cloudinary
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            })
        }
        //File has been uploadded successfully
        console.log("File is uploaded on cloudinary",response.url);
        return response;

    }catch (error) {
        fs.unlinkSync(localFilePath)// remove the localy saved temp file as the uplod operation got failed
        return null;
    }

}
    export {uploadOnCloudinary}


