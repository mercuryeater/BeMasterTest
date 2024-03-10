import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "@pages/LoginPage.jsx";
import ContentCategory from "@components/ContentCategory/ContentCategory.jsx";
import ContentDetails from "@components/ContentDetails/ContentDetails.jsx";
import NotFound from "@pages/NotFound.jsx";
import LayoutHeader from "@components/LayoutHeader/LayoutHeader.jsx";
import Home from "@components/Home/Home.jsx";

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
    element: <LayoutHeader />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/categories",
    element: <LayoutHeader />,
    children: [
      {
        path: ":categoryName",
        element: <ContentCategory />,
        errorElement: <NotFound />,
      },
    ],
  },
  {
    path: "/categories/:categoryName",
    element: <LayoutHeader />,
    children: [
      {
        path: ":movieID",
        element: <ContentDetails />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

export default router;
