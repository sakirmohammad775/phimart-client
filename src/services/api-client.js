import axios from "axios";

export default axios.create({
  baseURL: "https://phimart-ivory.vercel.app/api/v1/",
});