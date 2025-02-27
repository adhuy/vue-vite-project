import axios from "axios";

export const fetch = async (url, method = 'GET', options = {}) => {
  try {
    const response = await axios({
      url,
      method,
      ...options
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
