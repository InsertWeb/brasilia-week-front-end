import { toast } from "react-toastify";
import { api } from "./api";

export const Login = {
  auth: async (payload) => {
    try {
      const res = await api.post(`/auth`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error(error.response.data.msg);
      return error.response;
    }
  },
  me: async () => {
    try {
      const res = await api.get(`/me`);
      return res;
    } catch (error) {
      return error.response;
    }
  },
  getUsers: async () => {
    try {
      const res = await api.get(`/users`);
      return res;
    } catch (error) {
      return error.response;
    }
  },
  addNewUser: async (payload) => {
    try {
      const res = await api.post(`/users`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error(error.response.data.error);
      return error.response;
    }
  },
};