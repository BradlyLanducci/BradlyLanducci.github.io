import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header, Pages } from "./components/header.js"

import * as React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <div style={{
                fontFamily: `'vcr', monospace`,
                background: 'linear-gradient(to top, #000000, #0e0015)',
                // backgroundColor: 'black',
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column"
            }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to={`/${Object.keys(Pages)[0]}`} />} />

                    {Object.entries(Pages).map(([path, Component]) => (
                        <Route key={path} path={`/${path}`} element={<Component />} />
                    ))}
                </Routes>
            </div>
        </BrowserRouter>
    </React.StrictMode >
);
