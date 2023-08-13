import { useEffect, useState } from "react";
import { StyledListAllFriendsContainer } from "./styles";

export const ListAllFriendsComponent = () => {
  const [allFriends, setAllFriends] = useState([]);

  useEffect(() => {
    let storedFriends = localStorage.getItem("allFriends");
    storedFriends = JSON.parse(storedFriends);

    if (storedFriends == undefined) {
      setAllFriends([]);
    } else {
      setAllFriends(storedFriends);
    }
  }, []);

  return (
    <StyledListAllFriendsContainer>
      {allFriends.length !== 0 ? (
        allFriends.map((friend) => (
          <div id={friend.id} key={friend.id}>
            <img src={friend.picture} alt="" />
            <span>{friend.name}</span>
          </div>
        ))
      ) : (
        <span className="noFriendMessage">
          This user currently has no friends
        </span>
      )}
    </StyledListAllFriendsContainer>
  );
};
