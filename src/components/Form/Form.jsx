import { LeasingInfo } from "../LeasingInfo/LeasingInfo";
import { Ranges } from "../Ranges/Ranges";
import { SubmitLeasingButton } from "../SubmitLeasingButton/SubmitLeasingButton";
import styles from "./styles.module.css";

export const Form = () => {
    return (
        <div className={styles.gridContainer}>
            <Ranges styles={styles}></Ranges>
            <LeasingInfo styles={styles}></LeasingInfo>
            <SubmitLeasingButton></SubmitLeasingButton>
        </div>
    )
}