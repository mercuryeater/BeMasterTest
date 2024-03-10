import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "@pages/LoginPage.jsx";
import HomePage from "@pages/HomePage.jsx";
import ContentCategory from "@pages/Categories.jsx";
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
    path: "/categories",
    // element: <ContentCategory />,
    children: [
      {
        path: ":categoryName",
        element: <ContentCategory />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

export default router;
