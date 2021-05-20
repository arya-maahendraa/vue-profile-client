import { api } from "../../boot/axios";

export async function signin({ commit }, data) {
   try {
      const res = await api.post("auth/signin", data);
      commit("setUserToken", res.data);
      return res.data;
   } catch (err) {
      if (err.response.data) {
         return err.response.data;
      }
      return {
         success: false,
         message: "something broke!!",
      };
   }
}

export async function signup({ commit }, data) {
   try {
      const res = await api.post("auth/signup", data);
      return res.data;
   } catch (err) {
      if (err.response.data) {
         return err.response.data;
      }
      return {
         success: false,
         message: "something broke!!",
      };
   }
}
