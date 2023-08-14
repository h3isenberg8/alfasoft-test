import { Routes, Route } from "react-router-dom";
import { ListAllFriendsPage } from "../pages/listAllFriendsPage/listAllFriendsPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ListAllFriendsPage />} />
    </Routes>
  );
};
