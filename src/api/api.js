import axios from "axios";
import { getToken } from "../spotify/spotify";

const token = getToken();

export default axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
