import { API_PATH } from "./apiPath";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imagefile) => {
  const formData = new FormData();

  formData.append("image", imagefile);

  try {
    const response = await axiosInstance.post(API_PATH.IMAGE.UPLOAD, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default uploadImage;
