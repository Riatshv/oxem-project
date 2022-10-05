import { Form } from "../Form/Form";
import styles from "./styles.module.css"

export const Page = () => {
    return (
        <div>
            <div className={styles.container} onMouseDown={() => {return false}}>
                <h1 className={styles.header}>Рассчитатйте стоимость автомобиля в лизинг</h1>
                <Form></Form>
            </div>
        </div>
    )
}