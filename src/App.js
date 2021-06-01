import './App.css';
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="card">
          <div class="card-body">
            <main>
              <DictionarySearch defaultKeyword="Sunset" />
            </main>
          </div>
        </div>
        <div class="card-footer">
          <small class="text-muted">This page was created by Rofiat Olusanya and is hosted on {""}
            <a href="https://github.com/Rofiat369/weather-react">
              GitHub
            </a></small>
        </div>

      </div>
    </div>
  );
}

