import path from 'path';
import multer from 'multer';
import crypto from 'crypto';

const impFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
    directory: impFolder,

    storage: multer.diskStorage({
        destination: impFolder,
        filename: (request, file, callback) => {
            const fileHash = crypto.randomBytes(10).toString('HEX');
            const fileName = `${fileHash}-${file.originalname}`;

            return callback(null, fileName);
        }
    }),
};