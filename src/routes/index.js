import LayoutDefault from "../Layout";
import BookRoom from "../pages/BookRoom";
import CreateRoom from "../pages/CreateRoom";
import ListRoom from "../pages/ListRoom";

export const routes = [
    {
        path: "/",
        element: <LayoutDefault/>,
        children: [
            {
                path: "/book-room",
                element: <BookRoom/>
            },
            {
                path: "/create-room",
                element: <CreateRoom/>
            },
            {
                path: "/list-room",
                element: <ListRoom/>
            },
        ]
    }
    
]
