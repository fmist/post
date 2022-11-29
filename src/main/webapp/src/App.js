import './App.css';
import React from 'react';
import InputBar from "./components/InputBar";
import PostList from "./components/PostList";
import AppBar from "./components/AppBar";

function App() {
    return (
        <div className="App">
            <AppBar/>
            <PostList/>
            <InputBar/>
        </div>
    );
}

export default App;
