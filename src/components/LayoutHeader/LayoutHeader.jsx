import { Outlet } from "react-router-dom";
import Header from "@components/Header/Header.jsx";

export default function Categories() {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle, rgba(9,9,121,1) 0%, rgba(2,10,24,1) 53%)",
        height: "100vh",
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
}
