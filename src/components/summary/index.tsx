"use client";

import Image from "next/image";
import styled from "styled-components";
import data from "../../services/data.json";
import ReactionIcon from "../../public/assets/images/icon-reaction.svg";
import MemoryIcon from "../../public/assets/images/icon-memory.svg";
import VerbalIcon from "../../public/assets/images/icon-verbal.svg";
import VisualIcon from "../../public/assets/images/icon-visual.svg";

const category = data[0].category;
const score = data[0].score;

const category1 = data[1].category;
const score1 = data[1].score;

const category2 = data[2].category;
const score2 = data[2].score;

const category3 = data[3].category;
const score3 = data[3].score;
export function Summary() {
  return (
    <Container>
      <SummaryDetails>
        <Title>Summary</Title>
        <Reaction>
          <TextIcon>
            <Image src={ReactionIcon} alt="Reaction" />
            {category}
          </TextIcon>
          <Points>
            {score}
            <Opacity>/ 100</Opacity>
          </Points>
        </Reaction>

        <Memory>
          <TextIcon>
            <Image src={MemoryIcon} alt="Memory" />
            {category1}
          </TextIcon>
          <Points>
            {score1}
            <Opacity>/ 100</Opacity>
          </Points>
        </Memory>

        <Verbal>
          <TextIconTwo>
            <Image src={VerbalIcon} alt="Verbal" />
            {category2}
          </TextIconTwo>
          <Points>
            {score2}
            <Opacity>/ 100</Opacity>
          </Points>
        </Verbal>

        <Visual>
          <TextIconTwo>
            <Image src={VisualIcon} alt="Verbal" />
            {category3}
          </TextIconTwo>
          <Points>
            {score3}
            <Opacity>/ 100</Opacity>
          </Points>
        </Visual>

        <Continue onClick={() => alert("teste")}>Continue</Continue>
      </SummaryDetails>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 1rem;
  text-align: left;

  @media (max-width: 375px) {
    width: 90%;
  }
`;

const SummaryDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 85%;
  font-size: 1.5rem;
  margin: 1rem 0rem;
  text-align: left;

  @media (max-width: 375px) {
    width: 85%;
  }
`;

const TextIcon = styled.div`
  width: 45%;

  text-align: left;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextIconTwo = styled.div`
  width: 40%;

  text-align: left;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Reaction = styled.div`
  height: 3rem;
  width: 85%;
  padding: 1rem;
  margin: 0.5rem 0rem;

  background-color: #ff575729;
  color: #ff5757;
  border-radius: 0.5rem;

  font-weight: bold;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Memory = styled.div`
  height: 3rem;
  width: 85%;
  padding: 1rem;
  margin: 0.5rem 0rem;

  background-color: #ffb11f23;
  color: #ffb01f;
  border-radius: 0.5rem;

  font-weight: bold;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Verbal = styled.div`
  height: 3rem;
  width: 85%;
  padding: 1rem;
  margin: 0.5rem 0rem;

  background-color: #00bd9115;
  color: #00bd91;
  border-radius: 0.5rem;

  font-weight: bold;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Visual = styled.div`
  height: 3rem;
  width: 85%;
  padding: 1rem;
  margin: 0.5rem 0rem;

  background-color: #1124d420;
  color: #1125d4;
  border-radius: 0.5rem;

  font-weight: bold;
  text-align-last: left;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Continue = styled.button`
  height: 3rem;
  width: 85%;
  padding: 1rem;
  margin: 1.5rem 0rem;

  background-color: rgb(120, 87, 255);

  border-radius: 5rem;
  border: none;

  font-weight: bold;

  &:active {
    height: 3rem;
    width: 85%;
    padding: 1rem;
    margin: 1.5rem 0rem;

    background-color: #303b5a;

    border-radius: 5rem;
    border: none;

    font-weight: bold;
  }
`;

const Opacity = styled.h4`
  margin-left: 0.5rem;
  opacity: 0.4;
`;

const Points = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
`;
