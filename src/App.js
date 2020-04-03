import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from './pages/Home';
import {About} from './pages/About';
import {NavBar} from "./components/NavBar";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {FireBaseState} from "./context/firebase/firebaseState";

function App() {
    return (
        <FireBaseState>
            <AlertState>
                <BrowserRouter>
                    <NavBar/>
                    <div className="container pt-4">
                        <Alert/>
                        <Switch>
                            <Route path={'/'} exact component={Home}/>
                            <Route path={'/about'} exact component={About}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </FireBaseState>
    );
}

export default App;
