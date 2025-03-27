import ListPosts from "../../components/list-posts/ListPosts";
import { Outlet } from "react-router-dom";

export default function PostPage() {
  return (
    <>
      <ListPosts />
      <Outlet />
    </>
  );
}
