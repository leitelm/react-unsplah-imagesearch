import axios from "axios";
const apiKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${apiKey}`
  }
});

export default unsplash;
