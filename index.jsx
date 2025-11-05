import { createRoot } from "react-dom/client";
import React from "react";

const root = createRoot(document.getElementById("root"))

root.render(
    <TempName />)

function TempName() {
    return (
        <main>
        <img src="react-logo.svg" />
        <h1>Fun Facts About React!!!</h1>
        <ul>
            <li>First Release in 2013</li>
            <li>Was Originally created by Jordan Walke</li>
            <li>It's maintainded by META</li>
            <li>Powers thousands of Enterprise Apps including mobile Apps</li>
        </ul>
    </main> 
    )
}