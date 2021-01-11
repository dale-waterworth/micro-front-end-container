import React from 'react';
import './App.css';
// @ts-ignore
const Header = React.lazy(() => import('reactApp/Header'));

function App() {

  return (
    <div className="App">
        <div>
            Micro-frontend
        </div>

      <React.Suspense fallback='Loading header'>
        <Header>Data from the container injected into the <pre>'Header'</pre> component in micro-front-end-react project</Header>
      </React.Suspense>
    </div>
  );
}

export default App;
