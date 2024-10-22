import admin from 'firebase-admin';
import serviceAccount from './config/adminsdk.json' assert { type: 'json' };
import { v4 as uuidv4 } from 'uuid';

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount), // or use your service account
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
}

const UploadImage = async (fileBuffer, fileName) => {
    const bucket = admin.storage().bucket();
    const file = bucket.file( `images/${uuidv4()}_${fileName}`); // Use a unique name for the image
    const imageName = file.name
   
    const blobStream = file.createWriteStream({
        metadata: {
            contentType: 'image/png', // Adjust as needed based on file type
        resumable: false,
        },
    });

    return new Promise((resolve, reject) => {
        blobStream.on('error', (error) => {
            console.error('Upload failed:', error);
            reject(error);
        });

        blobStream.on('finish', async () => {
            // Get the public URL of the uploaded file
            const url = `https://storage.googleapis.com/${process.env.FIREBASE_STORAGE_BUCKET}/${imageName}`;
          
            resolve(url);
        });

        blobStream.end(fileBuffer);
    });
};

export default UploadImage;
