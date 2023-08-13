import { useEffect, useState } from "react";
import { StyledListAllFriendsContainer } from "./styles";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

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
            <div className="nameAndPictureContainer">
              <img src={friend.picture} alt="" />
              <span>{friend.name}</span>
            </div>

            <div className="iconsContainer">
              <AiOutlineEdit
                id={friend.id}
                onClick={(event) => console.log(event.target.id)}
              />
              <AiOutlineDelete
                id={friend.id}
                onClick={(event) => console.log(event.target.id)}
              />
            </div>
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
