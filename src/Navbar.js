import styled from "styled-components";

export default function Navigation() {
  return (
    <Navbar>
      <ul>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ul>
    </Navbar>
  );
}

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 60px;
  background-color: blue;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.a`
  border: 1px solid red;
  border-radius: 50%;
`;
