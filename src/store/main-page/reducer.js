import {values} from "../../constants/initialValues";
import { submitStatus } from "../../constants/submitStatus";
import { CALCULATION_ACTIONS } from "./actions";

export const autoCostReducer = (state = values.autoCost.initValue, action) => {
    switch (action.type) {
        case CALCULATION_ACTIONS.ChangeAutoCost: {
            return action.payload;
        }
        case CALCULATION_ACTIONS.resetAutoCost: {
            return action.payload;
        }
        default: {
            return state;
        }
    };
};

export const initPaymentReducer = (state = values.initPayment.initValue, action) => {
    switch (action.type) {
        case CALCULATION_ACTIONS.ChangePercent: {
            return action.payload;
        }
        case CALCULATION_ACTIONS.resetPercent: {
            return action.payload;
        }
        default: {
            return state;
        }
    };
};

export const leaseTermReducer = (state = values.leaseTerm.initValue, action) => {
    switch (action.type) {
        case CALCULATION_ACTIONS.ChangeLeaseTerm: {
            return action.payload;
        }
        case CALCULATION_ACTIONS.resetLeaseTerm: {
            return action.payload;
        }
        default: {
            return state;
        }
    };
};

export const submitReducer = (state = submitStatus.notStarted, action) => {
    switch (action.type) {
        case CALCULATION_ACTIONS.load: {
            return action.payload;
        }
        case CALCULATION_ACTIONS.error: {
            return action.payload;
        }
        case CALCULATION_ACTIONS.success: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}