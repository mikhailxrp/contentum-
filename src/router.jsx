import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import VideoContentPage from "./pages/VideoContentPage.jsx";
import PrivateRoute from "./store/features/PrivateRoute.jsx";
import ImagePage from "./pages/ImagePage.jsx";
import ChatPage from "./pages/ChatPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="dashboard" element={<AppLayout />}>
          <Route index element={<Navigate to="create-product" replace />} />
          <Route path="create-product" element={<ProductPage />} />
          <Route path="video-content" element={<VideoContentPage />} />
          <Route path="create-image" element={<ImagePage />} />
          <Route path="ai-chat" element={<ChatPage />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
