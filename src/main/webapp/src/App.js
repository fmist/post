import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Input from "./components/Input";
import Post from "./components/PostList";
import AppBar from "./components/AppBar";

function App() {
    return (
        <div className="App">
            <AppBar/>
            <Post/>
            <Input/>
        </div>
    );
}

export default App;
