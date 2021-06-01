import './App.css';
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <main>
              <DictionarySearch defaultKeyword="Sunset" />
            </main>
          </div>
        </div>
        <footer>
          <small >This page was created by Rofiat Olusanya and is hosted on {""}
            <a href="https://github.com/Rofiat369/weather-react">
              GitHub
            </a></small>
        </footer>

      </div>
    </div>
  );
}

