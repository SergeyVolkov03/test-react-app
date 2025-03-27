import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import ListUsers from "../../components/list-users/ListUsers";
import "../main-page/MainPage.css";

export default function MainPage() {
  return (
    <>
      <Header />
      <div className="content">
        <ListUsers />
        <Outlet />
      </div>
    </>
  );
}
