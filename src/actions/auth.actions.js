import { authConstants } from "./constants";
import { notification } from "antd";
// import "antd/dist/antd.css";
import AuthApi from "../apis/auth";

const AuthAction = {
  login: (user) => {
    return async (dispatch) => {
      dispatch({ type: authConstants.LOGIN_REQUEST });

      try {
        const res = await AuthApi.login(user);

        if (res.status === 200) {
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("authenticate", true);
          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
        }
      } catch (error) {
        console.log("error", error);
        notification.error({
          message: "Lỗi",
          description: "Sai tên đăng nhập hoặc mật khẩu",
        });
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: error },
        });
      }
    };
  },

  isUserLoggedIn: () => {
    return async (dispatch) => {
      const token = localStorage.getItem("token");

      if (token) {
        const user = JSON.parse(localStorage.getItem("user"));

        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: "Failed to login" },
        });
      }
    };
  },

  signout: () => {
    return async (dispatch) => {
      dispatch({ type: authConstants.LOGOUT_REQUEST });
      localStorage.clear();

      dispatch({ type: authConstants.LOGOUT_SUCCESS });
      window.location.reload();
    };
  },
};

export default AuthAction;
