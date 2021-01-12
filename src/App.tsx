import React from 'react';
import './App.css';
// React.lazy - returns a promise
// React.Suspense - used as a fallback if component failed to render

const AReactComponent = React.lazy(() => import('reactApp/AReactComponent'));
// @ts-ignore
const DaleAngularComponent = React.lazy(() => import('profile/DaleAngularComponent'));
// @ts-ignore
   // .then(m => ({ default: m.DaleAngularComponent })));
   /* .then(x => {
        // @ts-ignore
     //   return new x();
        return x;
    }));*/
//const ProfileModule = React.lazy(() => import('profile/ProfileModule'));
// .then(m => m.FlightsModule)
// console.log('DaleAngularComponent', DaleAngularComponent);
//console.log('ProfileModule', ProfileModule);
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

        <React.Suspense fallback='Loading DaleAngularComponent'>
            <DaleAngularComponent></DaleAngularComponent>
        </React.Suspense>

       {/* <React.Suspense fallback='Loading ProfileModule'>
            <ProfileModule></ProfileModule>
        </React.Suspense>*/}
    </div>
);


export default App;
