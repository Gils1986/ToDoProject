import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import ToDo from "./components/todo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-3">
          <div className="col-10 mx-auto">
            <ToDo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
