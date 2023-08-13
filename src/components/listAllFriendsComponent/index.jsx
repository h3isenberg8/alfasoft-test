import { useEffect, useState } from "react";
import { StyledListAllFriendsContainer } from "./styles";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

export const ListAllFriendsComponent = () => {
  const [allFriends, setAllFriends] = useState([]);
  const [friendIdToDelete, setFriendIdToDelete] = useState(null);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);

  useEffect(() => {
    let storedFriends = localStorage.getItem("allFriends");
    storedFriends = JSON.parse(storedFriends);

    if (storedFriends == undefined) {
      setAllFriends([]);
    } else {
      setAllFriends(storedFriends);
    }
  }, []);

  const deleteUser = () => {
    let allFriends = localStorage.getItem("allFriends");
    allFriends = JSON.parse(allFriends);

    const indexToDelete = allFriends.findIndex((friend) => {
      return Number(friend.id) === Number(friendIdToDelete);
    });

    allFriends.splice(indexToDelete, 1);
    localStorage.setItem("allFriends", JSON.stringify(allFriends));
  };

  return (
    <StyledListAllFriendsContainer>
      {allFriends.length !== 0 ? (
        allFriends.map((friend) => (
          <div className="friendLists" id={friend.id} key={friend.id}>
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
                onClick={(event) => {
                  setFriendIdToDelete(event.target.id);
                  setShowDeleteConfirmationModal(true);
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <span className="noFriendMessage">
          This user currently has no friends
        </span>
      )}

      {showDeleteConfirmationModal ? (
        <div className="deleteConfirmationModal">
          <div className="deleteConfirmationBox">
            <span>Confirm this user removal?</span>
            <div>
              <span
                className="confirm"
                onClick={() => {
                  toast.success("Friend successfully removed");
                  setShowDeleteConfirmationModal(false);
                  deleteUser();
                }}
              >
                Yes
              </span>
              <span
                className="refuse"
                onClick={() => {
                  toast("Friend not deleted");
                  setShowDeleteConfirmationModal(false);
                }}
              >
                No
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </StyledListAllFriendsContainer>
  );
};
