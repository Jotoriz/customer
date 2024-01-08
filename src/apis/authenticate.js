import axios from "../helpers/axios";

const AuthenticateAPI = {
  getAllAuthenticate: async () => {
    const res = await axios.get(`/sale/getAll`);

    return res;
  },
};

export default AuthenticateAPI;
