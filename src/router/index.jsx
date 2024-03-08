import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "@pages/LoginPage.jsx";
import NotFound from "@pages/NotFound.jsx";
// import Loader from "@components/Loader/Loader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "login",
    element: <LoginPage />,
    // loader: LoginLoader,
  },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
]);

export default router;
