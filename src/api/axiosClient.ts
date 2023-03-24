import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});
