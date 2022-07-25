import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  color: ${({ theme }) => theme.textBlack1};
`;

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
  margin-right: 15px;
  position: relative;
`;

export const Info = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  padding-left: 15px;
  padding-right: 15px;

  p {
    margin-bottom: 70px;
    font-size: 20px;
    color: ${({ theme }) => theme.textBlack2};
  }
  a {
    font-size: 16px;
    font-weight: 500;
    padding: 12px 35px;
    color: white;
    border-radius: 40px;
    display: inline-block;
    white-space: nowrap;
    border: none;
    background: ${({ theme }) => theme.skin};
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Hello = styled.h3`
  font-size: 28px;
  margin: 15px 0;

  span {
    font-family: "Clicker Script", cursive;
    font-size: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.skin};
  }
`;

export const Iam = styled.h3`
  font-size: 30px;
  margin: 15px 0;

  span {
    color: ${({ theme }) => theme.skin};
  }
`;

export const Image = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  text-align: center;
  position: relative;
  padding-left: 15px;
    padding-right: 15px;

  &::after {
    content: "";
    position: absolute;
    height: 80px;
    width: 80px;
    border-bottom: 10px solid ${({ theme }) => theme.skin};
    border-right: 10px solid ${({ theme }) => theme.skin};
    right: 20px;
    bottom: -40px;
  }

  &::before {
    content: "";
    position: absolute;
    height: 80px;
    width: 80px;
    border-top: 10px solid ${({ theme }) => theme.skin};
    border-left: 10px solid ${({ theme }) => theme.skin};
    left: 0;
    top: -40px;
  }

  img {
    margin: auto;
    border-radius: 5px;
    height: 400px;
  }
`;
