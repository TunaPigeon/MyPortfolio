

import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css"
// import { ThemeProvider } from "@emotion/react";
// import { blackTheme } from "./themes/blackTheme";


export default function NavBar() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <nav className="NavBar" >
             {/* <ThemeProvider theme={blackTheme}> */}
            <Tabs value={selectedTab} onChange={handleChange}>
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Projects" component={Link} to="/projects" />
            </Tabs>
            {/* </ThemeProvider> */}
        </nav>
    );
}