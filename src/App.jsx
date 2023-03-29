import "./App.css";
import { MyRoutes } from "./routers/routes";

function App() {
  return (
    <div>
      <header>
        <a>
          <h1 className="title">+Movies 🎬</h1>
        </a>
      </header>
      <MyRoutes />
    </div>
  );
}

export default App;
