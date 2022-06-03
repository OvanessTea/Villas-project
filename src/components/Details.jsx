import React from "react";
import { useSpring, animated, Transition } from "react-spring";
import { useContext, useRef } from "react";
import { SwitchContext } from "../context";

const Details = () => {
    const { isDisable } = useContext(SwitchContext);
    const [{ height, marginTop, top, objectPositionX, objectPositionY }, set] =
        useSpring(() => ({
            height: "729px",
            marginTop: "0px",
            top: "0px",
            objectPositionX: "0px",
            objectPositionY: "0px",
        }));
    const mountRef = useRef(null);
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
            <Transition
                items={isDisable}
                from={{ opacity: 1 }}
                enter={{ opacity: 0 }}
                leave={{ opacity: 1 }}
                immediate={!mountRef.current}
                reverse={!isDisable}
                config={{
                    duration: 300,
                    animationTimingFunction: "linear",
                }}
            >
                {(styles, item) =>
                    item && (
                        <animated.img
                            src={require("../images/image01.jpg")}
                            alt="villa"
                            style={{
                                height,
                                marginTop,
                                top,
                                objectPosition: `${objectPositionX} ${objectPositionY}`,
                                styles,
                            }}
                        />
                    )
                }
            </Transition>
            <Transition
                items={!isDisable}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
                immediate={!mountRef.current}
                reverse={!isDisable}
                config={{
                    duration: 300,
                    animationTimingFunction: "linear",
                }}
            >
                {(styles, item) =>
                    item && (
                        <animated.img
                            src={require("../images/image02.jpg")}
                            alt="villa"
                            style={{
                                height,
                                marginTop,
                                top,
                                objectPosition: `${objectPositionX} ${objectPositionY}`,
                                styles,
                            }}
                        />
                    )
                }
            </Transition>

            <p>Details</p>
        </div>
    );
};

export default Details;
