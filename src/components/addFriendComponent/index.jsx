import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { StyledAddFriendContainer } from "./styles";
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

export const AddFriendsComponent = () => {
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFriendCreation = (newUserData) => {
    let allFriends = localStorage.getItem("allFriends");
    allFriends = JSON.parse(allFriends) || "empty";

    if (allFriends != "empty") {
      const checkEmail = allFriends.find((e) => {
        return e.email === newUserData.email;
      });

      if (checkEmail !== undefined) {
        toast.error("Email already in use");
        return;
      }
    }

    let dataToAddIfLocalStorageEmpty = [{ ...newUserData, id: 1 }];

    if (allFriends == "empty" || allFriends.length == 0) {
      localStorage.setItem(
        "allFriends",
        JSON.stringify(dataToAddIfLocalStorageEmpty)
      );
    } else {
      localStorage.setItem(
        "allFriends",
        JSON.stringify([
          ...allFriends,
          { ...newUserData, id: allFriends[allFriends.length - 1].id + 1 },
        ])
      );
    }
    toast.success("Friend added");

    setShowAddFriendModal(false);
  };

  return (
    <StyledAddFriendContainer>
      <button
        className="addFriendButton"
        onClick={() => setShowAddFriendModal(true)}
      >
        Add Friend
      </button>
      {showAddFriendModal ? (
        <div className="addFriendModal">
          <span
            className="closeModal"
            onClick={() => setShowAddFriendModal(false)}
          >
            X
          </span>
          <form
            className="formWrapper"
            onSubmit={handleSubmit((event) => handleFriendCreation(event))}
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
    </StyledAddFriendContainer>
  );
};
