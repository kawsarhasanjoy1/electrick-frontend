import axios from "axios";
const IMAGE_KEY = process.env.NEXT_PUBLIC_IMAGE_API_KEY;
console.log(IMAGE_KEY)
const useUploadImage = async (image: any) => {
  const IMAGE_URL = `https://api.imgbb.com/1/upload?key=${IMAGE_KEY}`;
  const formData = new FormData();
  formData.append("image", image);
  const response = await axios.post(IMAGE_URL, formData);
  return response.data.data;
};

export default useUploadImage;
