import styles from './history.module.css'



const History = props => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <h2 className={styles.text}>{props.content.heading}</h2>
            </div>
            <div className={styles.body}>
                {props.content.arr.map(i => <ul className={styles.list}> {i.list.map(j => <li className={styles.listitem}>{j}</li>)}</ul>)}
            </div>
        </div>
    )
}

export default History

