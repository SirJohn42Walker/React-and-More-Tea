import styled from "styled-components";

export default function Card() {
  return (
    <CharacterCard>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="A confident human beeing"
      />
      <h2>Morty Smith</h2>
    </CharacterCard>
  );
}

const CharacterCard = styled.article`
  border: 3px solid turquoise;
  border-radius: 25%;
  background-color: red;
`;
