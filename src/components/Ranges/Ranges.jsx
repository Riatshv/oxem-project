// import styles from "./styles.module.css";
import { values } from "../../constants/initialValues";
import { RangeCost } from "../RangeCost/RangeCost";
import { RangePercent } from "../RangePercent/RangePercent";
import { RangeLease } from "../RangeLease/RangeLease";

export const Ranges = () => {
    const {autoCost, initPayment, leaseTerm} = values;
    return (
        <>
            <RangeCost 
                headerTitle={autoCost.header} 
                unit={autoCost.unit}
                minimum={autoCost.minimum}
                maximum={autoCost.maximum}
            >
                
            </RangeCost>

            <RangePercent
                headerTitle={initPayment.header} 
                unit={initPayment.unit}
                minimum={initPayment.minimum}
                maximum={initPayment.maximum}
            >
                
            </RangePercent>

            <RangeLease
                headerTitle={leaseTerm.header} 
                unit={leaseTerm.unit}
                minimum={leaseTerm.minimum}
                maximum={leaseTerm.maximum}
            >

            </RangeLease>

        </>
    )
}