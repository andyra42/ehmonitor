import logo from './logo.svg';
import './App.css';
const name = process.env.REACT_APP_NAME;
function App() {
  return (
    <div className="App">
      Anand Rapolu {name}
    </div>
  );
}

export default App;
