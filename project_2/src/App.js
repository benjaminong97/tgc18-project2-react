import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Listings from "./components/Listings"
import moiraiLogo from "./images/moirai.png"
import TopBar from "./components/TopBar"


function App() {
    return (
        <React.Fragment>
            <TopBar/>
            <Listings />
        </React.Fragment>

    )
}

export default App;