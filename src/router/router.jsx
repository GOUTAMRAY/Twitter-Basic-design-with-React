import { createBrowserRouter } from "react-router-dom";
import privateRouter from "./privateRouter";
import publicRouter from "./publicRouter";


// create router 
const router = createBrowserRouter([...privateRouter, ...publicRouter])


export default router;








