import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: white;
  /* box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2); */

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
    font-size: 14px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  &:focus {
    border-bottom: 5px solid black;
    border-radius: 10px;
    animation: bounce;
    animation-duration: 1s;
    border-top: 0.3px solid black;
    border-left: 0.3px solid black;
    border-right: 0.3px solid black;
  }
`;
