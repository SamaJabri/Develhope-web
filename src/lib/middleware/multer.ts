import multer from "multer";
import mime from "mime";

import { randomUUID } from "crypto";

const generatePhotoFilename = (mimeType: string) => {
  const randomFilename = `${randomUUID()}-${Date.now()}`;
  const fileExtension = mime.getExtension(mimeType);
  const filename = `${randomFilename}.${fileExtension}`;

  return filename;
};

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, callback) => {
    return callback(null, generatePhotoFilename(file.mimetype));
  },
});

const multerOptions = {};

const initMulterMiddleware = () => {
  return multer({ storage, ...multerOptions });
};

export { generatePhotoFilename, multerOptions, initMulterMiddleware };
