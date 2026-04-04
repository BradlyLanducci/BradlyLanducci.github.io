import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar, Pages } from "./components/nav_bar.js"

import * as React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "./components/nav_bar.js"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <div style={{
                backgroundColor: "black",
                width: "100%",
                height: "100%"
            }}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Navigate to={`/${Object.keys(Pages)[0]}`} />} />

                    {Object.entries(Pages).map(([path, Component]) => (
                        <Route key={path} path={`/${path}`} element={<Component />} />
                    ))}
                </Routes>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
