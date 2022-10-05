
export const InputLayout = ({styles, children, range, filledRange, rangeThumb, isDisabledInput}) => {
    return (
        <div className={[styles.block, isDisabledInput ? styles.inputDisabled : ""].join(" ")}>
            <div className={styles.block__innerContent}>
                {children}
            </div>

            <div className={[styles.range].join(" ")} ref={range}>
                <div className={styles.filledRange} ref={filledRange}>
                    <div className={styles.rangeThumb} ref={rangeThumb}></div>
                </div>
            </div>
        </div>
    )
}