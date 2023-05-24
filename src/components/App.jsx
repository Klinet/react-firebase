import React from 'react';
import Posts from "./Posts";
import { Router } from "@reach/router";
export default function App(props) {
    return (

        <div className="app-container">
            <Router>
                <Posts default path="posts" />
            </Router>
            <Posts />
        </div>
    );
}

