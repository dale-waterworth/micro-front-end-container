import React from 'react';
import './App.css';
// React.lazy - returns a promise
// React.Suspense - used as a fallback if component failed to render

const AReactComponent = React.lazy(() => import('reactApp/AReactComponent'));
// @ts-ignore
// const FlightsModule = React.lazy(() => import('mfe1/Module'));
// .then(m => m.FlightsModule)

const App = () => (
    <div className="App">
        <div>
            Micro-frontend
        </div>

      <React.Suspense fallback='Loading React'>
        <AReactComponent>Data from 'micro-front-end-container' injected into the
            <pre>'AReactComponent'</pre>
            component in 'micro-front-end-react' project
        </AReactComponent>
      </React.Suspense>

        {/* <React.Suspense fallback='Loading Angular'>
        <FlightsModule></FlightsModule>
      </React.Suspense>*/}
    </div>
  );


export default App;
