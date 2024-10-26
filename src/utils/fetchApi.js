import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyB2wIFbovQSj3SHXfcwfuknNrbOuRGvYfg";

export const fetchApiForYoutubeData = async (endpoints, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoints}`, {
      params: {
        ...params,
        key: API_KEY,
      },
    });
    // console.log('this is my response', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
  }
};