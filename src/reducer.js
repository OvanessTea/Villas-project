export function reducer(state, { type, payload }) {
    switch (type) {
        case "TOGGLE_POSITION":
            console.log(payload);
            console.log(state);
            return {
                ...state,
                isDisable: !payload,
                position: payload === true ? "02" : "01",
            };
        default:
            return state;
    }
}
