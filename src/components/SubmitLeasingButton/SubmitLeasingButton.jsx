import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {  selectSubmitStatus } from "../../store/main-page/selectors"
import {  submitForm } from "../../store/main-page/actions";
import { submitStatus } from "../../constants/submitStatus";

export const SubmitLeasingButton = () => {
    const submitStatusFromStore = useSelector((state) => selectSubmitStatus(state));
    const dispatch = useDispatch();
    return (
        <div className={styles.buttonContainer}>
            {submitStatusFromStore === submitStatus.loading ?
                <button className = {styles.button} type="submit">
                    <div className= {styles.buttonLoading}>
                        <div className= {styles.buttonLoading1}></div>
                    </div>
                </button>
                :

                submitStatusFromStore === submitStatus.error || submitStatusFromStore === submitStatus.success ?
                    <button className = {[styles.button, styles.buttonDisabled].join(" ")} type="submit">
                        Оставить заявку
                    </button>
                    :
                    <button className={[styles.button, styles.buttonSubmit].join(" ")} type="submit" 
                        onClick ={() => {
                            dispatch(submitForm());
                        }}
                    >
                        Оставить заявку
                    </button>
            } 
            
        </div>
    )
}

