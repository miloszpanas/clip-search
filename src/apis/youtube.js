import axios from "axios";

const KEY = "AIzaSyBT7DUOF67NdccjwdYP0CAvQmqx95QEwsw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});