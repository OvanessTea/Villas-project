import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Details = () => {
    const [picture, setPicture] = useState(require("../images/image01.jpg"));
    const [{ height, marginTop, top, objectPositionX, objectPositionY }, set] =
        useSpring(() => ({
            height: "729px",
            marginTop: "0px",
            top: "0px",
            objectPositionX: "0px",
            objectPositionY: "0px",
        }));
    return (
        <div
            className="_details"
            onMouseEnter={() =>
                set({
                    height: "942px",
                    marginTop: "-213px",
                    top: "-50px",
                    objectPositionX: "-151.5px",
                    objectPositionY: "122px",
                })
            }
            onMouseLeave={() =>
                set({
                    height: "729px",
                    marginTop: "0px",
                    top: "0px",
                    objectPositionX: "0px",
                    objectPositionY: "0px",
                })
            }
        >
            <animated.img
                src={picture}
                alt="villa"
                style={{
                    height,
                    marginTop,
                    top,
                    objectPosition: `${objectPositionX} ${objectPositionY}`,
                }}
            />
            <p>Details</p>
        </div>
    );
};

export default Details;
