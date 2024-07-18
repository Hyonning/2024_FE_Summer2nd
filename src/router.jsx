import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "post/:postID", element: <PostDetailPage /> },
    ],
  },
]);

export default router;
