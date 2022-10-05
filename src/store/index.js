import {applyMiddleware, createStore} from "redux";
import { submitMiddleware } from "../middlewares/submitMiddleware";
import { autoCostReducer, initPaymentReducer, leaseTermReducer, submitReducer } from "./main-page/reducer";

const rootReducer = (state = {}, action) => {
    return (
        {
            autoCost: autoCostReducer(state.autoCost, action),
            percent: initPaymentReducer(state.percent, action),
            leaseTerm: leaseTermReducer(state.leaseTerm, action),
            submitStatus: submitReducer(state.submitStatus, action),
        }
    )
};


export const store = createStore(rootReducer, applyMiddleware(submitMiddleware));
