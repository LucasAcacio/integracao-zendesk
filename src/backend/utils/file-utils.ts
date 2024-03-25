import fs from "fs";
import path from "path";

export async function saveFileLocally(file: File): Promise<string> {
  const uploadDir = path.join(__dirname, "uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const fileName = `${Date.now()}_${file.name}`;

  const filePath = path.join(uploadDir, fileName);

  const fileBuffer = await file.arrayBuffer();
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, Buffer.from(fileBuffer), (error) => {
      if (error) {
        console.error("Error writing file:", error);
        reject(error);
      } else {
        console.log("File saved successfully:", filePath);
        resolve(filePath);
      }
    });
  });
}
