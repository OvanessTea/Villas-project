import Main from "./components/Main";
import Details from "./components/Details";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";

function App() {
    const [position, setPosition] = useState("01");
    const [isDisable, setIsDisable] = useState(true);

    const tooglePics = () => {
        if (position === "01") {
            setPosition("02");
            setIsDisable(false);
        } else {
            setPosition("01");
            setIsDisable(true);
        }
    };
    return (
        <div className="App">
            <Main
                position={position}
                setPosition={setPosition}
                isDisable={isDisable}
                setIsDisable={setIsDisable}
            />
            <Details />
            <Sidebar />
        </div>
    );
}

export default App;
