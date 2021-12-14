import styled from "styled-components";

export const ButtonPage = styled.button`
  border: none;
  border-radius: none;
  color: #05f;
  background: none;
  font-size: 17px;
  padding: 10px;
  margin-right: 10px;

  &:hover {
    background: linear-gradient(to bottom, #b5b4b832, #ddd);
    /*     border-top-right-radius: ${({ r }) => (r ? "75%" : null)};
    border-bottom-right-radius: ${({ r }) => (r ? "75%" : null)};
    border-bottom-left-radius: ${({ l }) => (l ? "85%" : null)};
    border-top-left-radius: ${({ l }) => (l ? "85%" : null)}; */
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
  color: #2b292970;
  background-color: #b5b4b832;
`;

export const LabelPage = styled.label`
  font-size: 20px;
  background-color: ${({ br }) => (br ? br : "none")};
  padding: 0px 8px;
  border-radius: none;
  height: 50%;
  text-align: center;
  margin: 3px;
  padding: 7px 10px;
  padding-bottom: 30px;
`;
