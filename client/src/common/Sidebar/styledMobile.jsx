import styled from "styled-components";

export const ContainerFilterMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    color: #2b2929;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 40px 40px 60px 260px;

    height: 100%;
    padding-top: 10px;
    width: 100%;
    background-color: #f0f0f1;
    z-index: 100;

    //border-bottom: ${({ open }) => (open ? "5px inset #186cc2" : "none")};
    //border-bottom-left-radius: ${({ open }) => (open ? "20px" : "none")};
    //border-bottom-right-radius: ${({ open }) => (open ? "20px" : "none")};

    animation: ${({ open }) => (open ? "open 0.5s ease " : "close 0.5s ease")};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    @keyframes open {
      from {
        height: 100%;
      }
      to {
        height: 400px;
      }
    }
    @keyframes close {
      from {
        height: 400px;
      }
      to {
        height: 100%;
      }
    }
  }
`;

export const DivMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    grid-column: 1/3;
    grid-row: 4/5;
    justify-content: space-evenly;
  }
`;

export const OrderFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 40px;
  margin-top: 10px;

  grid-column: 1/3;
  grid-row: 2/3;
`;

export const IconContainer = styled.div`
  grid-row: 1/2;
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonMobile = styled.div`
  display: flex;
  flex-direction: row;
  color: #000;
  margin: 10px;
  grid-column: 1/3;
  grid-row: 3/4;
`;

export const ClearButton = styled.button`
  border-radius: 5px;
  border: 1px solid #2b2929;
`;
