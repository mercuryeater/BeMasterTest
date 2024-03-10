import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "@pages/LoginPage.jsx";
import HomePage from "@pages/HomePage.jsx";
import ContentCategory from "@pages/ContentCategory.jsx";
import NotFound from "@pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/category",
    // element: <ContentCategory />,
    children: [
      {
        path: ":categoryName",
        element: <ContentCategory />,
      },
    ],
  },
]);

export default router;
