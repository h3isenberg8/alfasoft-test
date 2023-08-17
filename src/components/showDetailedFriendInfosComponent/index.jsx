import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { StyledShowDetailedFriendInfosContainer } from "./styles";

export const ShowDetailedFriendInfosComponent = () => {
  const params = useParams();
  let allFriends = localStorage.getItem("allFriends");
  allFriends = JSON.parse(allFriends);
  const foundUser = allFriends.find((e) => {
    return Number(e.id) == Number(params.id);
  });

  console.log(foundUser);

  return (
    <StyledShowDetailedFriendInfosContainer>
      <img src={foundUser.picture} alt="" />

      <div className="infosContainer">
        <span>Name: {foundUser.name}</span>
        <span>Email: {foundUser.email}</span>
        <span>Address: {foundUser.address}</span>
      </div>
    </StyledShowDetailedFriendInfosContainer>
  );
};
