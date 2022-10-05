import { useSelector } from "react-redux";
import { values } from "../../constants/initialValues"
import { selectAutoCostValue, selectLeaseTerm, selectPercentValue } from "../../store/main-page/selectors";
import { RangeLayout } from "../RangeLayout/RangeLayout"
import { ResultingValue } from "../ResultingValue/ResultingValue";

export const LeasingInfo = () => {
    const leasingSum = values.leasingSum;
    const initPercent = values.initPercent;
    const monthPay = values.monthPay;
    const autoCost = useSelector((state) => selectAutoCostValue(state));
    const percent = useSelector((state) => selectPercentValue(state));
    const leaseTerm = useSelector((state) => selectLeaseTerm(state));
    const initPayment = autoCost*percent/100;

    const monthPayValue = Math.round((autoCost - initPayment) * ((initPercent/100 * Math.pow((1 + initPercent/100), leaseTerm)) / (Math.pow((1 + initPercent/100), leaseTerm) - 1)));
    const leasingSumValue = Math.round(initPayment + leaseTerm*monthPayValue);

    return (
        <>
            <RangeLayout headerTitle={leasingSum.header} isResulting={true}>
                <ResultingValue value={leasingSumValue} unit={leasingSum.unit}></ResultingValue>
            </RangeLayout>

            <RangeLayout headerTitle={monthPay.header} isResulting={true}>
                <ResultingValue value={monthPayValue} unit={monthPay.unit}></ResultingValue>
            </RangeLayout>
        </>
    )
}