const sharp = require("sharp");

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: "Only POST requests allowed" }),
      };
    }

    const base64String = JSON.parse(event.body).file;
    const buffer = Buffer.from(base64String, "base64");
    const convertedFile = await convertFile(buffer);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "image/png",
      },
      body: convertedFile.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    };
  }
};

const convertFile = async (buffer) => {
  const convertedImage = await sharp(buffer).png().toBuffer();
  return convertedImage;
};
