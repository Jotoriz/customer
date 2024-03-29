import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { publicRoutes } from "./Router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  const auth = localStorage.getItem("authenticate") || false;

  return (
    <Provider store={store}>
      <Router>
        {window.location.pathname !== "/register" &&
          window.location.pathname !== "/login" && <Header />}
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.path === "/Profile" && !auth ? (
                    <Navigate to="/login" />
                  ) : (
                    <Page />
                  )
                }
              />
            );
          })}
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
