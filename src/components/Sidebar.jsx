import React from "react";

const Sidebar = () => {
    return (
        <div className="_sidebar">
            <div className="burger">
                <div className="menu-button"></div>
            </div>
            <img
                className="logo"
                src={require("../images/logo.jpg")}
                alt="creato"
            />
            <div className="contacts">
                <a href="!#">
                    <img
                        src={require("../images/linkedin.png")}
                        alt="linkedin"
                    />
                </a>
                <a href="!#">
                    <img
                        src={require("../images/instagram.png")}
                        alt="instagram"
                    />
                </a>
                <a href="!#">
                    <img src={require("../images/youtube.png")} alt="youtube" />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
