import admin from 'firebase-admin';
import { v4 as uuidv4 } from 'uuid';

const serviceAccount={
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-h9ce4%40employee-management-syst-18fb4.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  }

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
