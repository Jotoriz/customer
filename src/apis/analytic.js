import axios from "../helpers/axios";

const AnalyticAPI = {
  getAll: async () => {
    const res = await axios.get(`/analytic/getAll`);

    return res;
  },
};

export default AnalyticAPI;
