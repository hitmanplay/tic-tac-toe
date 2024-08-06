import React from 'react';
import GlobalStore from "@src/store";
import Main from '@pages/Main/Main'
import './App.css'


const App = () => {
    return (
        <div className="app">
            <GlobalStore>
                <Main />
            </GlobalStore>
        </div>
    );
};

export default App;