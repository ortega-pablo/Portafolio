import styled from "styled-components";

export const Container = styled.div`
  width: 270px;
  background-color: ${({ theme }) => theme.backgroundBlack2};
  position: fixed;
  left: 0;
  top: 0;
  padding: 30px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.backgroundBlack3};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Logo = styled.div`
  position: absolute;
  top: 50px;
  font-size: 30px;
  text-transform: capitalize;

  a {
    color: ${({ theme }) => theme.textBlack1};
    font-weight: 700;
    padding: 15px 20px;
    font-size: 30px;
    letter-spacing: 5px;
    position: relative;

    span {
      font-family: "Clicker Script", cursive;
      font-size: 40px;
    }

    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-bottom: 5px solid ${({ theme }) => theme.skin};
      border-left: 5px solid ${({ theme }) => theme.skin};
      bottom: 0;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-top: 5px solid ${({ theme }) => theme.skin};
      border-right: 5px solid ${({ theme }) => theme.skin};
      top: 0;
      right: 0;
    }
  }
`;

export const NavToggler = styled.div`
  height: 43px;
  width: 45px;
  border: 1px solid ${({ theme }) => theme.backgroundBlack3};
  cursor: pointer;
  position: fixed;
  left: 300px;
  top: 20px;
  border-radius: 15px;
  background: ${({ theme }) => theme.backgroundBlack2};
  display: none;
  align-items: center;
  justify-content: center;

  span {
    height: 2px;
    width: 18px;
    background: ${({ theme }) => theme.skin};
    display: inline-block;
    position: relative;

    &::before {
      content: "";
      height: 2px;
      width: 18px;
      background: ${({ theme }) => theme.skin};
      position: absolute;
      top: -6px;
      left: 0;
    }
    &::after {
      content: "";
      height: 2px;
      width: 18px;
      background: ${({ theme }) => theme.skin};
      position: absolute;
      top: 6px;
      left: 0;
    }
  }
`;

export const Nav = styled.ul`
  margin-top: 50px;

  li {
    margin-bottom: 20px;
    display: block;

    a {
      font-size: 16px;
      font-weight: 600;
      display: block;
      align-items: center;
      border-bottom: 1px solid ${({ theme }) => theme.backgroundBlack3};
      color: ${({ theme }) => theme.textBlack1};
      padding: 5px 15px;

      &.active {
        color: ${({ theme }) => theme.skin};
      }

      i{
        margin-right: 15px;
      }
    }
  }
`;
