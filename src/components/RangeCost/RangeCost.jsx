import { RangeLayout } from "../RangeLayout/RangeLayout";
import { useSelector } from "react-redux";
import { selectAutoCostValue } from "../../store/main-page/selectors";
import { Input } from "../Input/Input";
import { changeAutoCost, resetAutoCost } from "../../store/main-page/actions";


export const RangeCost = ({maximum, minimum, headerTitle, unit}) => {
    const inputValue = useSelector((state) => selectAutoCostValue(state));
    return (
        <RangeLayout headerTitle={headerTitle}>
            <Input 
                change={changeAutoCost}
                minimum={minimum}
                maximum={maximum}
                unit={unit}
                inputValue={inputValue}
                resetValue={resetAutoCost}
            ></Input>
        </RangeLayout>
    )
}