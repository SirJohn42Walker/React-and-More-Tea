import styled from "styled-components";

export default function Card({ img, name }) {
  return (
    <CharacterCard>
      <img src={img} alt="" />
      <h2>{name}</h2>
    </CharacterCard>
  );
}

const CharacterCard = styled.article`
  border: 3px solid turquoise;
  border-radius: 25%;
  background-color: red;
`;
