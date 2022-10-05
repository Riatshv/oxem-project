import { submitStatus } from "../../constants/submitStatus";

export const CALCULATION_ACTIONS = {
    ChangeAutoCost: "CALCULATIONS/CHANGE_AUTOCOST",
    ChangePercent: "CALCULATIONS/CHANGE_PERCENT",
    ChangeLeaseTerm: "CALCULATIONS/CHANGE_LEASETERM",
    resetAutoCost: "CALCULATIONS/RESET_AUTOCOST",
    resetPercent: "CALCULATIONS/RESET_PERCENT",
    resetLeaseTerm: "CALCULATIONS/RESET_LEASETERM",
    submit: "CALCULATIONS/SUBMIT",
    load: "CALCULATIONS/LOAD",
    success: "CALCULATIONS/SUCCESS",
    error: "CALCULTAIONS/ERROR"
};

export const changeAutoCost = (value) => {
    return (
        {
            type: CALCULATION_ACTIONS.ChangeAutoCost,
            payload: value,
        }
    )
};

export const changePercent = (value) => {
    return (
        {
            type: CALCULATION_ACTIONS.ChangePercent,
            payload: value,
        }
    )
};

export const changeLeaseTerm = (value) => {
    return (
        {
            type: CALCULATION_ACTIONS.ChangeLeaseTerm,
            payload: value,
        }
    )
};


export const resetAutoCost = () => {
    return (
        {
            type: CALCULATION_ACTIONS.resetAutoCost,
            payload: "",
        }
    )
};

export const resetPercent = () => {
    return (
        {
            type: CALCULATION_ACTIONS.resetPercent,
            payload: "",
        }
    )
};

export const resetLeaseTerm = () => {
    return (
        {
            type: CALCULATION_ACTIONS.resetLeaseTerm,
            payload: "",
        }
    )
};

export const submitForm = () => {
    return (
        {
            type: CALCULATION_ACTIONS.submit,
        }
    )
};

export const loadSumbit = () => {
    return (
        {
            type: CALCULATION_ACTIONS.load,
            payload: submitStatus.loading,
        }
    )
}

export const successSubmit = () => {
    return (
        {
            type: CALCULATION_ACTIONS.success,
            payload: submitStatus.success,
        }
    )
}

export const failedSubmit = () => {
    return (
        {
            type: CALCULATION_ACTIONS.error,
            payload: submitStatus.error,
        }
    )
}