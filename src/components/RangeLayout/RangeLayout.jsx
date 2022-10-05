import styles from "./styles.module.css";

export const RangeLayout = ({children, headerTitle, isResulting}) => {
    return (
        <div className={styles.container}>
            <h2 className={[styles.headerTitle, isResulting && styles.headerTitleResulting].join(" ")}>{headerTitle}</h2>
            {children}
        </div>
    )
}