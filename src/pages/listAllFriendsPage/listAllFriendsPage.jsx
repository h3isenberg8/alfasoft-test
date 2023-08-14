import { Link } from "react-router-dom";
import { AddFriendsComponent } from "../../components/addFriendComponent";
import { ListAllFriendsComponent } from "../../components/listAllFriendsComponent";
import { StyledHomePageHeader } from "./styles";

export const ListAllFriendsPage = () => {
  return (
    <>
      <StyledHomePageHeader>
        <span>Welcome to the friends manager app</span>
        <Link to="addfriends">Add new friends</Link>
      </StyledHomePageHeader>
      <ListAllFriendsComponent />
    </>
  );
};
