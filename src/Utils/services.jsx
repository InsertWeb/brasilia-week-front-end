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

export const PageConfig = {
  getBanner: async () => {
    try {
      const res = await api.get(`/banner`);
      return res;
    } catch (error) {
      return error.response;
    }
  },
  updateBanner: async (payload) => {
    try {
      const res = await api.put(`/banner`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro ao mudar configurações do Banner!");
      return error.response;
    }
  },

  getEventosProgramacaoPage: async (page = 1, perPage = 999, search = "") => {
    try {
      const res = await api.get(
        `/eventos?page=${page}&perPage=${perPage}&s=${search}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  addEventosProgramacaoPage: async (payload) => {
    try {
      const res = await api.post(`/eventos`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Eventos!");
      return error.response;
    }
  },
  editEventosProgramacaoPage: async (payload, id) => {
    try {
      const res = await api.put(`/eventos/${id}`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Eventos!");
      return error.response;
    }
  },
  deleteEventosProgramacaoPage: async (id) => {
    try {
      const res = await api.delete(`/eventos/${id}`);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Eventos!");
      return error.response;
    }
  },

  getGaleria: async (page = 1, perPage = 999, search = "") => {
    try {
      const res = await api.get(
        `/galeria?page=${page}&perPage=${perPage}&s=${search}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  addGaleria: async (payload) => {
    try {
      const res = await api.post(`/galeria`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Galeria!");
      return error.response;
    }
  },
  editGaleria: async (payload, id) => {
    try {
      const res = await api.put(`/galeria/${id}`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Galeria!");
      return error.response;
    }
  },
  deleteGaleria: async (id) => {
    try {
      const res = await api.delete(`/galeria/${id}`);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Galeria!");
      return error.response;
    }
  },

  getSobre: async () => {
    try {
      const res = await api.get(`/sobre`);
      return res;
    } catch (error) {
      return error.response;
    }
  },
  updateSobre: async (payload) => {
    try {
      const res = await api.put(`/sobre`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro ao mudar configurações do Banner!");
      return error.response;
    }
  },

  getParceiros: async (page = 1, perPage = 999, search = "") => {
    try {
      const res = await api.get(
        `/parceiros?page=${page}&perPage=${perPage}&s=${search}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  addParceiros: async (payload) => {
    try {
      const res = await api.post(`/parceiros`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Parceiros!");
      return error.response;
    }
  },
  editParceiros: async (payload, id) => {
    try {
      const res = await api.put(`/parceiros/${id}`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Parceiros!");
      return error.response;
    }
  },
  deleteParceiros: async (id) => {
    try {
      const res = await api.delete(`/parceiros/${id}`);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Parceiros!");
      return error.response;
    }
  },

  getImprensa: async (page = 1, perPage = 999, search = "") => {
    try {
      const res = await api.get(
        `/imprensa?page=${page}&perPage=${perPage}&s=${search}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  addImprensa: async (payload) => {
    try {
      const res = await api.post(`/imprensa`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Imprensa!");
      return error.response;
    }
  },
  editImprensa: async (payload, id) => {
    try {
      const res = await api.put(`/imprensa/${id}`, payload);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Imprensa!");
      return error.response;
    }
  },
  deleteImprensa: async (id) => {
    try {
      const res = await api.delete(`/imprensa/${id}`);
      toast.success(res.data.msg);
      return res;
    } catch (error) {
      toast.error("Erro na rota de Imprensa!");
      return error.response;
    }
  },
};
