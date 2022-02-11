import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80px;
  align-items: center;
  color: #2b2929;
  background-color: #b5b4b832;
`;

export const ButtonPage = styled.button`
  border: none;
  border-radius: none;
  color: #2b2929;
  background: none;
  padding: 10px;
  height: 50%;
  width: 120px;

  border: 1px solid #2b2929;
  border-radius: ${({ radius }) => (radius ? radius : "none")};
  border-left: ${({ left }) => (left ? left : "none")};
  border-right: ${({ right }) => (right ? right : "none")};

  &:hover {
    cursor: pointer;
    background: linear-gradient(to bottom, #b5b4b832, #ddd);
  }
`;

export const LabelPage = styled.label`
  text-decoration: ${({ decoration }) => (decoration ? decoration : "none")};
  border: ${({ border }) => (border ? border : "none")};
  border-left: ${({ left }) => (left ? left : "none")};
  border-right: ${({ right }) => (right ? right : "none")};
  border-radius: none;
  height: 50%;
  text-align: center;
  align-self: center;
  padding: 10px;
  width: 40px;
  padding-bottom: 10px;
  padding-top: 13px;
`;

export const OutOf = styled.div`
  background-color: ${({ br }) => (br ? br : "none")};
  border: ${({ border }) => (border ? border : "none")};
  border-left: ${({ left }) => (left ? left : "none")};
  border-right: ${({ right }) => (right ? right : "none")};
  border-radius: none;
  height: 50%;
  text-align: center;
  padding: 10px;
  padding-top: 13px;
`;
