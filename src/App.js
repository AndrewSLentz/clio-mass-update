import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    authorizeUser();
  }, []);

  const authorizeUser = async () => {
    const response = await fetch('https://app.clio.com/oauth/authorize', {
      response_type: 'code',
      client_id: 'rdaq4fRe19tYdvBpqkbWtRBbgi9tQUkoWjgtTlXn',
      redirect_uri: 'https://andrewslentz.github.io/clio-mass-update/'
    })
  }

  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
