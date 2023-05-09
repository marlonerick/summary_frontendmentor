"use client";
import styled from "styled-components";

export function YourResult() {
  return (
    <>
      <Result>
        <Title>Your Result</Title>
        <Points>
          <Focused> 76 </Focused> <Opacity>of 100</Opacity>
        </Points>
        <Subtitle>Great</Subtitle>
        <Description>
          Your scored higher than 65% of the peolple who have taken these tests.
        </Description>
      </Result>
    </>
  );
}

const Result = styled.div`
  height: 28rem;

  background-color: #7857ff;
  border-radius: 1rem;
  color: white;

  font-size: 1.3rem;

  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 375px) {
    flex-direction: column;

    border-radius: 0rem 0rem 1rem 1rem;

    width: 100%;
    height: 38rem;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 300;
  opacity: 0.6;

  margin-bottom: 2rem;
`;

const Points = styled.div`
  width: 10rem;
  height: 10rem;
  font-size: 1rem;

  background: rgb(120, 87, 255);
  background: linear-gradient(
    0deg,
    rgba(120, 87, 255, 1) 0%,
    rgba(78, 33, 202, 1) 100%
  );

  border-radius: 10rem;
  box-shadow: #7857aa;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Opacity = styled.p`
  font-size: 0.9rem;
  opacity: 0.6;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;

  text-align: center;
  margin-top: 1rem;
`;

const Focused = styled.p`
  font-size: 3rem;
  font-weight: bold;
`;

const Description = styled.h6`
  font-size: 0.8rem;
  font-weight: 300;

  opacity: 0.7;

  width: 11.5rem;
  text-align: center;
  margin: 1rem;

  @media (max-width: 375px) {
    width: 15rem;
  }
`;
