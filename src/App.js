import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="primary" onClick={() => alert("You clicked the button")}>Alert</Button>
      </header>
    </div>
  );
}

export default App;
