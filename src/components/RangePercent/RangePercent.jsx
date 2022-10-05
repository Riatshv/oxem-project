import { useSelector } from "react-redux";
import { changePercent, resetPercent } from "../../store/main-page/actions";
import { selectPercentValue } from "../../store/main-page/selectors";
import { Input } from "../Input/Input"
import { RangeLayout } from "../RangeLayout/RangeLayout"

export const RangePercent = ({maximum, minimum, headerTitle, unit}) => {
    const inputValue = useSelector((state) => selectPercentValue(state));
    return (
        <RangeLayout headerTitle={headerTitle}>
            <Input 
                change={changePercent}
                minimum={minimum}
                maximum={maximum}
                unit={unit}
                inputValue={inputValue}
                isPercent={true}
                resetValue={resetPercent}
            ></Input>
        </RangeLayout>
    )
}