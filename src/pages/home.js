import styles from './home.module.css'






const Home = props => {



    return(
        <div className={styles.hero}>
        <div className={styles.herotext}>
            <h1 className={styles.text}>
                !همیشه یه راه بهتر برای پرسیدن هست
            </h1>
            <p className={styles.text2}>
                .فرم ها و نظرسنجی های بی دردسر ایجاد کنید تا دیگران علاقه مند به پاسخ دادن به آن باشند
            </p>
            <p className={styles.text2}>
                .پاسخ‌های بیشتر، بینش واضح‌تر و همچنین لبخند دریافت کنید
            </p>
            <p className={styles.text2}>
                !هرچه میخواهد دل تنگت بپرس
            </p>

            <button className={styles.butt}>
                .رایگان شروع کنید
            </button>
        </div>

        <div className={styles.heroimage}>

        </div>


    </div>
    )
}


export default Home;