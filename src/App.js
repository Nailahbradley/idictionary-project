import logo from "./logo.jpg";
import Search from "./Seach";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <img src={logo} alt="logo" className="img-fluid" />
        <main>
          <Search />
        </main>
        <footer className="text-center">Coded by Nailah Bradley </footer>
      </div>
    </div>
  );
}
