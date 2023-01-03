import { MouseEventHandler } from "react";
import styles from "./css/TabIndicator.module.css";

interface IProps {
    transform: string
    onClick: MouseEventHandler<HTMLDivElement>
    date: Date
    isActive?: boolean
}

export default function TabIndicator(props: IProps) {
    return (
        <div style={{transform: props.transform}} onClick={props.onClick} className={styles.root}>
            <div className={`${styles.container} ${props.isActive ? styles.containerActive : ""}`}>
                <p className={styles.weekDay}>Ti</p>
                <p className={styles.calendarDay}>{props.date.getDate()}</p>
                <div className={styles.dot}></div>
            </div>
        </div>
    )
}