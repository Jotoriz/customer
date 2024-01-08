import { notification } from "antd";
import UserApi from "../apis/auth";
import { userConstants } from "./constants";

const UserAction = {
  signup: (user) => {
    return async (dispatch) => {
      dispatch({ type: userConstants.USER_REGISTER_REQUEST });
      try {
        const res = await UserApi.signup(user);

        if (res.status === 201) {
          const { message } = res.data;
          dispatch({
            type: userConstants.USER_REGISTER_SUCCESS,
            payload: { message },
          });
          notification.success({
            message: "Thành Công",
            description: "Bây giờ bạn có thể đăng nhập",
          });
        } else {
          dispatch({
            type: userConstants.USER_REGISTER_FAILURE,
            payload: { error: res.data.error },
          });
          notification.error({
            message: "Lỗi",
            description: "1",
          });
        }
      } catch (error) {
        console.log("error", error);
        if (error.response.data.message == undefined) {
          notification.error({
            message: "Error",
            description: `${error.response.data.error}`,
          });
        } else {
          notification.error({
            message: "Error",
            description: `${error.response.data.message}`,
          });
        }
        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
          payload: { error: error.response.data.message },
        });
      }
    };
  },

  getAllUser: () => {
    return async (dispatch) => {
      dispatch({ type: userConstants.GET_ALL_USERS_REQUEST });

      const res = await UserApi.getAll();

      if (res.status === 200) {
        const userList = res.data;
        dispatch({
          type: userConstants.GET_ALL_USERS_SUCCESS,
          payload: { users: userList.listCustomer },
        });
      } else {
        dispatch({
          type: userConstants.GET_ALL_USERS_FAILURE,
          payload: { error: res.data.error },
        });
      }
    };
  },

  getUserDetailById: (payload) => {
    return async (dispatch) => {
      dispatch({
        type: userConstants.GET_USER_DETAIL_BY_ID_REQUEST,
      });

      const { userId } = payload.params;

      const res = await UserApi.getById(userId);

      try {
        if (res.status === 200) {
          dispatch({
            type: userConstants.GET_USER_DETAIL_BY_ID_SUCCESS,
            payload: { userDetail: res.data },
          });
        }
      } catch (error) {
        dispatch({
          type: userConstants.GET_USER_DETAIL_BY_ID_FAILURE,
          payload: { error: res.data.error },
        });
      }
    };
  },
};

export default UserAction;
