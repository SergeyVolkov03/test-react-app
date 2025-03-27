import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main-page/MainPage";
import PostPage from "./pages/posts-page/PostsPage";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";
import CommentsPage from "./pages/comment-page/CommentsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/users/:userId/posts/" element={<PostPage />}>
            <Route
              path="/users/:userId/posts/:postId"
              element={<CommentsPage />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
