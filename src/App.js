import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Navigation from "./Navbar";
import { useState, useEffect } from "react";

export default function App() {
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data["results"]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            img={character.image}
            name={character.name}
          />
        );
      })}
      <Navigation />
    </div>
  );
}
