import axios from "../helpers/axios";

const SaleAPI = {
  getAllSale: async () => {
    const res = await axios.get(`/sale/getAllSale`);

    return res;
  },
};

export default SaleAPI;
