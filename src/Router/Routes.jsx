import { Routes, Route } from 'react-router-dom';
import Projects from '../pages/projects';
import Home from '../pages/home';


function AppRoutes(props) {
    return(
        <Routes>
            {/* index matches on default/home URL: */}
            <Route index element={<Home {...props}/>} />
            <Route path="/projects" element={<Projects {...props}/>} />

        </Routes>
    )
}

export default AppRoutes;