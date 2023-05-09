"use client";
import { YourResult } from "@/components/result";
import { Summary } from "@/components/summary";
import styled from "styled-components";

export function HomePage() {
  return (
    <Container>
      <Dashboard>
        <YourResult />
        <Summary />
      </Dashboard>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center; // centers in the flex direction and the default flex-direction is row
  align-items: center; // centers perpendicular to the flex direction

  background-color: #eee;
`;

const Dashboard = styled.div`
  width: 38rem;
  height: 28rem;

  background-color: white;
  color: black;
  border-radius: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 375px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
