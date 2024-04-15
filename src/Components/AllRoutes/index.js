import { routes } from "../../routes";
import {useRoutes} from "react-router-dom";

function AllRoutes() {
    const elements = useRoutes(routes);
    return (
        elements
    )
}
export default AllRoutes;