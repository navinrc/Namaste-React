import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement("h1", {
    id: "title",
    key: "h1",
}, "heading 1");

const heading2 = React.createElement("h2", {
    id: "title",
    key: "h2",
}, "heading 2");

const container = React.createElement("div", {
    id: "container",
    key: "container",
}, [heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

//passing a react element inside the root
root.render(container);