
/* 
it will use the cloudinary package to upload images to cloudinary and return the secure url of the uploaded image. 
It will also delete the file from local storage after uploading to cloudinary. If there is an error,
 it will delete the file from local storage and return a 500 status code with an error message.

 Now neeed a middleware "multer " to handle the file upload from the client and pass the file path to this function.
*/
import { v2 as cloudinary } from 'cloudinary'
// Import File System module to delete temporary files
import fs from "fs"
import path from "path"



// Upload helper: resolve absolute path and log detailed errors
const uploadonCloudinary = async (localfilePath) => {

  // Configure Cloudinary using environment variables
 cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
 });



    try {
        if (!localfilePath) {
            console.error("uploadonCloudinary: no local file path provided")
            return null
        }

        const absolutePath = path.isAbsolute(localfilePath)
            ? localfilePath
            : path.resolve(localfilePath)
 
        console.log("uploadonCloudinary: uploading ->", absolutePath)

        const response = await cloudinary.uploader.upload(absolutePath, {
            resource_type: "auto"   // Automatically detect the file type(video, image, pdf, etc)
        })

        // File uploaded successfully
        console.log("Cloudinary upload successful:", response && response.url)

        //remove local temporary files if exists 
        fs.unlinkSync(localfilePath)
        return response.secure_url;
        
    } catch (error) {

        console.error("Cloudinary Upload Error:");
        console.log("HTTP Code:", error.http_code);
        console.log("Message:", error.message);
        console.dir(error, { depth: null });

        if (error.error) {
            console.error(error.error);
        }

        // remove local temporary file if exists
        try {
            if (localfilePath && fs.existsSync(localfilePath)) {
                fs.unlinkSync(localfilePath)
            }
        } catch (e) {
            console.error("Failed to remove temp file:", e)
        }



        return null
    }
}


export { uploadonCloudinary }
