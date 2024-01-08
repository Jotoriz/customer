import axios from "../helpers/axios";

const AuthApi = {
  login: async (user) => {
    const res = await axios.post(`/signin`, {
      ...user,
    });
    return res;
  },
  signup: async (user) => {
    const res = await axios.post(`/signup`, {
      ...user,
    });
    return res;
  },
};

export default AuthApi;
