import {useEffect} from 'react'
import { navigate } from '@reach/router'
import './App.css';

function App() {
  useEffect(() => {
    const goto = () => navigate('https://www.cypress.io/');

    const timer = setTimeout(goto, 5000);
    return () => clearTimeout(timer);

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Redirect to cypress.io in 2 seconds...
        </p>
      </header>
    </div>
  );
}

export default App;
