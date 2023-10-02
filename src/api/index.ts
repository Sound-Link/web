import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jm.soundlink-back.com",
});
