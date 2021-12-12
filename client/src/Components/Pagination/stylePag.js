import styled from "styled-components";

export const ButtonPage = styled.button`
  border: none;
  border-radius: 5px;
  color: #aac6dc;
  background: none;
  font-size: 20px;
  padding: 10px;

  &:hover {
    background: linear-gradient(to bottom, #b5b4b832, #ddd);
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  align-items: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: lighter;
  color: #aac6dc;
  background-color: #b5b4b832;
`;

export const LabelPage = styled.label`
  font-size: 20px;
  background-color: ${({ br }) => (br ? br : "none")};
  padding: 0px 8px;
  border-radius: 50%;
  height: 50%;
  text-align: center;
  margin: 3px;
`;
