import axios from "../helpers/axios";

const ProductAPI = {
  getAllProduct: async () => {
    const res = await axios.get(`/product/getAll`);

    return res;
  },

  create: async (form) => {
    const res = await axios.post(`product/create`, {
      ...form,
    });
    return res;
  },

  update: async (form) => {
    const res = await axios.put(`/product/${form._id}`, {
      ...form,
    });

    return res;
  },
};

export default ProductAPI;
