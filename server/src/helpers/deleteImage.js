const fs = require("fs").promises;

const deleteImage = async (imgPath) => {
  try {
    await fs.access(imgPath);
    await fs.unlink(imgPath);

    console.log("image is deleted");
  } catch (error) {
    console.log(error.message);
  }
};

const extraImgDelete = async (data, imgPaths) => {
  try {
    const fileImages = await fs.readdir(imgPaths);

    const databaseImg = data
      .filter((item) => item?.image)
      .map((item) => item.image);

    const filterdImg = fileImages.filter((img) => !databaseImg.includes(img));

    filterdImg.map(async (item) => await fs.unlink(`${imgPaths}/${item}`));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { deleteImage, extraImgDelete };
