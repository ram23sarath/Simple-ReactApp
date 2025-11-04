import React from "react";
import { createRoot } from "react-dom/client";

// Quick runtime check
console.log("index.jsx loaded");

const root = createRoot(document.querySelector("#root"));

root.render(<h1>Hello, Jaime!</h1>);