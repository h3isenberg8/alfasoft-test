import { Toaster } from "react-hot-toast";
import { ManageAndAddFriendsPage } from "./pages/manageAndAddFriendsPage";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <>
      <Toaster />

      <ManageAndAddFriendsPage />
    </>
  );
}

export default App;
