import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
});

const noRote = ["/login"];

api.interceptors.request.use(
  (config) => {
    const location = window.location;
    if (!noRote.includes(location.pathname)) {
      const { token } = JSON.parse(localStorage.getItem("token") || "{}");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
