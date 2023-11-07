const jimp = require("jimp");
const path = require("path");

const avatarsDir = path.join(__dirname, "../", "public");

const resizeImage = async (imagePath) => {
  const avatarPath = path.join(avatarsDir, imagePath);
  const img = await jimp.read(avatarPath);
  await img.resize(250, 250);
  await img.writeAsync(avatarPath);
};

module.exports = resizeImage;
