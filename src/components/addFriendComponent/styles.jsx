import { styled } from "styled-components";

export const StyledAddFriendContainer = styled.div`
  .addFriendButton {
    width: 100%;
  }
  .addFriendModal {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    background-color: rgb(33, 19, 13, 0.3);
    flex-direction: column;
    justify-content: center;
  }

  .closeModal {
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;
  }

  .formHeaderInfo {
    align-self: center;
  }

  form {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 70%;
    justify-content: space-between;
  }

  .errorWarning {
    color: red;
  }
`;
