import styles from "./SubTitle.module.css"
 
export default function SubTitle({ subtitle, color }) {
    return (
        <div className={styles.container} style={{ backgroundColor: color }}>
            <p className={styles.text}> {subtitle} </p>
        </div>
    )
}