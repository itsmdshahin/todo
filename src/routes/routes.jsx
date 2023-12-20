import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import TaskList from "../components/TaskList";
import About from "../pages/About"; 

const NotFound = () => (
    <div>
        <h2>404 Not Found</h2>
        <p>Sorry, the page you are looking for does not exist. </p>
    </div>
);

const routes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/tasks',
            element: <TaskList />,
        },
        {
            path: '/about',
            element: <About />,
        }, 
        {
            path: '*',
            element: <NotFound />,
        }

    ])

    return (
        <>
            <RouterProvider
                router={router}
            />
        </>
    );
};

export default routes;
