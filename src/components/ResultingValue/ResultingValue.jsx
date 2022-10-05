import { convertNumberToDischarge } from "../../functions/convertNumber";
import styles from "./styles.module.css";

export const ResultingValue = ({value, unit}) => {
    const stringValue = convertNumberToDischarge(value);
    return (
        <div className={styles.block}>
            <span>{stringValue}</span>
            <span className={styles.unit}>{unit}</span>
        </div>
    )
}