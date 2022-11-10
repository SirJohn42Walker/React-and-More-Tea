import styled from "styled-components";

export default function Header() {
  return (
    <Headline>
      <h1>React and More Tea</h1>
    </Headline>
  );
}

const Headline = styled.header`
  position: fixed;
  top: 0;
  background: linear-gradient(blueviolet, green);
  width: 100vw;
  height: 15vw;
`;
