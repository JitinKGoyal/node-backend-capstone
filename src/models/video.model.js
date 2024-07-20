import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String, // Cloudinary url
            required: true,
        },
        thumbnail: {
            type: String, // Cloudinary url
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export const Video = mongoose.model('Video', videoSchema);
