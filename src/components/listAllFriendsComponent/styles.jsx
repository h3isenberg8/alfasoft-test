import { styled } from "styled-components";

export const StyledListAllFriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .friendLists {
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

  .deleteConfirmationModal {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .deleteConfirmationBox {
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .deleteConfirmationBox > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .deleteConfirmationBox > div > span {
    cursor: pointer;
  }

  .confirm {
    padding: 10px;
    border-radius: 10px;
    background-color: red;
  }

  .refuse {
    padding: 10px;
    border-radius: 10px;
    background-color: green;
  }
`;
