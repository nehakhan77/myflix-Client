import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import React from "react";

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Tells React to render your app in the root DOM element
const App = () => {
    return <MainView />;
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

