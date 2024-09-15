type ClockActionType = {
    type: string;
    seconds?: number;
};

type ClockStateType = {
    hours: number;
    minutes: number;
    seconds: number;
}

const initialState: ClockStateType = { hours: 0, minutes: 0, seconds: 0 };

export const clockReducer = (state: ClockStateType = initialState, action: ClockActionType) => {
    return state;
};
