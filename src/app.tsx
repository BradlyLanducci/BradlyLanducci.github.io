import { createBrowserRouter, RouterProvider, RouteObject, DataRouter } from 'react-router-dom';
import About from "./about.tsx"
import Vain from "./vain.tsx"
import Music from "./music.tsx"

const routes: RouteObject[] = [
    {
        path: "/",
        element: <About />,
    },
    {
        path: "/vain",
        element: <Vain />,
    },
    {
        path: "/music",
        element: <Music />,
    }
];


const router: DataRouter = createBrowserRouter(routes);

const App = () => {
    const style = {
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000000"
    };

    return <div style={style}>
        <RouterProvider router={router} />
    </div>;
};

export default App;