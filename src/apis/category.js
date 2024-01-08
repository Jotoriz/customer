import axios from "../helpers/axios";

const CategoryAPI = {
  getAllCategory: async () => {
    const res = await axios.get(`/category/get`);

    return res;
  },
};

export default CategoryAPI;
