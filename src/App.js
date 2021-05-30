import './App.css';
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">


        <header className="App-header" >

        </header>
        <main>
          <DictionarySearch defaultKeyword="Sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This page was created by Rofiat Olusanya and is hosted on {""}
            <a href="https://github.com/Rofiat369/weather-react">
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

