import { values } from "../constants/initialValues";
import { CALCULATION_ACTIONS, failedSubmit, loadSumbit, successSubmit } from "../store/main-page/actions";

export const submitMiddleware = (store) => (next) => (action) => {
    if (action.type !== CALCULATION_ACTIONS.submit) {
        return next(action);
    }

    store.dispatch(loadSumbit());

    const {autoCost, percent, leaseTerm} = store.getState();
    const initPercent = values.initPercent;
    const initPayment = autoCost*percent/100;

    const monthPayValue = Math.round((autoCost - initPayment) * ((initPercent/100 * Math.pow((1 + initPercent/100), leaseTerm)) / (Math.pow((1 + initPercent/100), leaseTerm) - 1)));
    const leasingSumValue = Math.round(initPayment + leaseTerm*monthPayValue);

    const data = {
        autoCost: autoCost,
        initPayment: initPayment,
        leaseTerm: leaseTerm,
        leasingSumValue: leasingSumValue,
        monthPayValue: monthPayValue,
    };


    fetch("https://hookb.in/eK160jgYJ6UlaRPldJ1P", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(data)
    })
        .then((response) => {
            if (response.status === 400) {
                store.dispatch(failedSubmit())
                return;
            }
            response.json();
            store.dispatch(successSubmit());
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            store.dispatch(failedSubmit())
            console.log(error)
        });
};