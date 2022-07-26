import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  color: ${({ theme }) => theme.textBlack1};
  background-color: ${({ theme }) => theme.backgroundBlack1};
`;

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 2vw;
  margin-right: 2vw;
  position: relative;
  min-width: 80vh;
`;

export const Info = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
  padding-left: 1vw;
  padding-right: 1vw;

  p {
    margin-bottom: 1vh;
    font-size: 2rem;
    color: ${({ theme }) => theme.textBlack2};
  }
  a {
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.6rem 2.5rem;
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
  font-size: 2.8rem;
  margin: 1vh 0;

  span {
    font-family: "Clicker Script", cursive;
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.skin};
  }
`;

export const Iam = styled.h3`
  font-size: 3rem;
  margin: 0 0 1vh 0;

  span {
    color: ${({ theme }) => theme.skin};
  }
`;

export const Image = styled.div`
  display: flex;
  flex: 0 0 40%;
  min-width: 40%;
  text-align: center;
  position: relative;
  padding-left: 1vw;
  padding-right: 1vw;

  &::after {
    content: "";
    position: absolute;
    height: 10vw;
    width: 10vw;
    border-bottom: 0.6vw solid ${({ theme }) => theme.skin};
    border-right: 0.6vw solid ${({ theme }) => theme.skin};
    right: 0;
    bottom: 23vh;
  }

  &::before {
    content: "";
    position: absolute;
    height: 10vw;
    width: 10vw;
    border-top: 0.6vw solid ${({ theme }) => theme.skin};
    border-left: 0.6vw solid ${({ theme }) => theme.skin};
    left: 0;
    top: 23vh;
  }

  img {
    margin: auto;
    border-radius: 5px;
    height: 40vh;
  }
`;
