import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="othercontainer">other pages</div>
      </div>
    </div>
  );
}

export default App;
