import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar, Pages } from "./nav_bar.tsx"

import * as React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "./nav_bar.tsx"

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
                    {Object.entries(Pages).map(([path, Component]) => (
                        <Route key={path} path={`/${path}`} element={<Component />} />
                    ))}
                </Routes>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
