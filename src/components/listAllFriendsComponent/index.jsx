import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { StyledListAllFriendsContainer } from "./styles";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^(?=\S*\s*\S{6,})(?=(?:\S+\s){1,}\S{1,})[\w\s]+$/,
      "Name must have at least two words and be at least 8 characters long"
    )
    .required(),
  email: yup.string().email("You must insert a valid email").required(),
  address: yup.string().required(),
  picture: yup
    .string()
    .url("You must insert a valid picture url")
    .required("Cannot create a friend without an image"),
});

export const ListAllFriendsComponent = () => {
  const [allFriends, setAllFriends] = useState([]);
  const [friendIdToDeleteOrEdit, setFriendIdToDeleteOrEdit] = useState(null);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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
      return Number(friend.id) === Number(friendIdToDeleteOrEdit);
    });

    allFriends.splice(indexToDelete, 1);
    localStorage.setItem("allFriends", JSON.stringify(allFriends));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFriendEdition = (newFriendData) => {
    console.log(friendIdToDeleteOrEdit);
    setShowEditModal(false);
    let allFriends = localStorage.getItem("allFriends");
    allFriends = JSON.parse(allFriends);

    const indexToEdit = allFriends.findIndex((e) => {
      return Number(e.id) == Number(friendIdToDeleteOrEdit);
    });

    allFriends[indexToEdit] = { ...allFriends[indexToEdit], ...newFriendData };

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
                onClick={(event) => {
                  console.log(event.target.id);
                  setFriendIdToDeleteOrEdit(event.target.id);
                  setShowEditModal(true);
                }}
              />
              <AiOutlineDelete
                id={friend.id}
                onClick={(event) => {
                  setFriendIdToDeleteOrEdit(event.target.id);
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
      {showEditModal ? (
        <div className="editModalBackground">
          <span className="teste" onClick={() => setShowEditModal(false)}>
            X
          </span>
          <form
            className="formWrapper"
            onSubmit={handleSubmit((event) => handleFriendEdition(event))}
          >
            <span className="formHeaderInfo">Add your friend's info</span>
            <input placeholder="Name" {...register("name")} />
            <span className="errorWarning">{errors.name?.message}</span>

            <input placeholder="Email" {...register("email")} />
            <span className="errorWarning">{errors.email?.message}</span>

            <input placeholder="Adress" {...register("address")} />
            <span className="errorWarning">{errors.address?.message}</span>

            <input placeholder="Picture url" {...register("picture")} />
            <span className="errorWarning">{errors.picture?.message}</span>

            <button type="submit">Submit</button>
          </form>
        </div>
      ) : null}
    </StyledListAllFriendsContainer>
  );
};
