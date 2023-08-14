import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { ListAllFriendsPage } from "./pages/listAllFriendsPage/listAllFriendsPage";
import { AddNewFriendsPage } from "./pages/addNewFriendsPages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListAllFriendsPage />}></Route>
        <Route path="/addfriends" element={<AddNewFriendsPage />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
