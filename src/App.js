import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>React and More Tea</h1>
      </header>
      <article>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="A confident human beeing"
        />
        <h2>Morty Smith</h2>
      </article>
      <navbar>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </navbar>
    </div>
  );
}
