import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [moments, setMoments] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setMoments(data));
  }, [])



  return (
    <div className="App">
      <h1>Moments</h1>
      <ul>
        {moments && moments.map((moment) =>
          <li key={moment.id}>{moment.title}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
