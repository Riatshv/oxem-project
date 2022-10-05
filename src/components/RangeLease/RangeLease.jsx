import { useSelector } from "react-redux";
import { changeLeaseTerm, resetLeaseTerm } from "../../store/main-page/actions";
import { selectLeaseTerm } from "../../store/main-page/selectors";
import { Input } from "../Input/Input";
import { RangeLayout } from "../RangeLayout/RangeLayout";

export const RangeLease = ({headerTitle, minimum, maximum, unit}) => {
    const inputValue = useSelector((state) => selectLeaseTerm(state));
    return (
        <RangeLayout headerTitle={headerTitle}>
            <Input 
                change={changeLeaseTerm}
                minimum={minimum}
                maximum={maximum}
                unit={unit}
                inputValue={inputValue}
                resetValue={resetLeaseTerm}
            ></Input>
        </RangeLayout>
    );
};