import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudnary = (localFilePath) => {
    try {
        const response = cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto',
        });

        // Delete the local file after upload completes.
        fs.unlink(localFilePath);
        return response;
    } catch (error) {
        console.log(error);
    }
};
