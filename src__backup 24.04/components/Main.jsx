import React from "react";
import { useState, useRef } from "react";
import { Spring, animated, Transition } from "react-spring";

const Main = () => {
    const [position, setPosition] = useState("01");
    const [isDisable, setIsDisable] = useState(true);
    const mountRef = useRef(null);

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
        <div className="main">
            <div className="_location">
                <Spring
                    immediate={!mountRef.current}
                    from={{ opacity: 1 }}
                    to={{ opacity: 0 }}
                    config={{
                        duration: 300,
                        animationTimingFunction: "linear",
                    }}
                    reverse={isDisable}
                >
                    {(styles) => (
                        <animated.p
                            className="location"
                            style={styles}
                            ref={mountRef}
                        >
                            Dubai, UAE
                        </animated.p>
                    )}
                </Spring>
                <Spring
                    immediate={!mountRef.current}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    config={{
                        duration: 300,
                        animationTimingFunction: "linear",
                    }}
                    reverse={isDisable}
                >
                    {(styles) => (
                        <animated.p
                            className="location second_location"
                            style={styles}
                            ref={mountRef}
                        >
                            Quito, Ecuador
                        </animated.p>
                    )}
                </Spring>
            </div>
            <div className="_villasName">
                <Spring
                    immediate={!mountRef.current}
                    from={{ opacity: 0, transform: "translateX(-30rem)" }}
                    to={{ opacity: 1, transform: "translateX(0rem)" }}
                    config={{
                        duration: 300,
                        animationTimingFunction: "linear",
                    }}
                    reverse={!isDisable}
                >
                    {(styles) => (
                        <animated.h1
                            className="villasName"
                            style={styles}
                            ref={mountRef}
                        >
                            {"Jumehira \n Villa"}
                        </animated.h1>
                    )}
                </Spring>
                <Transition
                    items={!isDisable}
                    from={{ opacity: 0, transform: "translateX(30rem)" }}
                    enter={{ opacity: 1, transform: "translateX(0rem)" }}
                    leave={{ opacity: 0, transform: "translateX(30rem)" }}
                    reverse={!isDisable}
                    config={{
                        duration: 300,
                        animationTimingFunction: "linear",
                    }}
                >
                    {(styles, item) =>
                        item && (
                            <animated.p
                                className="villasName second_villa"
                                style={styles}
                            >
                                {"Cumbaya \n Villa"}
                            </animated.p>
                        )
                    }
                </Transition>
            </div>

            <label className="button_label">
                <button
                    className="prev_btn"
                    onClick={() => tooglePics()}
                    disabled={isDisable}
                >
                    Prev.
                </button>
                <button
                    className="next_btn"
                    onClick={() => tooglePics()}
                    disabled={!isDisable}
                >
                    Next
                </button>
            </label>
            <div className="_number">
                <label>
                    <p className="p_label">{position}</p>
                    <p className={"p_label_line p_label_line_" + position}> </p>
                    <p>02</p>
                </label>
            </div>
        </div>
    );
};

export default Main;
