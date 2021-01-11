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
        <Header>Hello this container adding data into the header from app 1</Header>
      </React.Suspense>
    </div>
  );
}

export default App;
