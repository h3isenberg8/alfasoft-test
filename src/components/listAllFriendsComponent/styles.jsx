import { styled } from "styled-components";

export const StyledListAllFriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    border: 3px blue solid;
    border-radius: 5px;
    justify-content: space-between;
  }

  .nameAndPictureContainer {
    height: 30px;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .iconsContainer {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .nameAndPictureContainer > img {
    height: inherit;
  }

  > div > img {
    height: 30px;
    border-radius: 50%;
  }
`;
