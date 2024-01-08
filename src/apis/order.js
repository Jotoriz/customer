import axios from "../helpers/axios";

const OrderAPI = {
  getAllOrder: async () => {
    const res = await axios.get(`/order/getAll`);

    return res;
  },
};

export default OrderAPI;
