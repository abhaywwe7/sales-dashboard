import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
