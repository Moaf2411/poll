import styles from './About.module.css'




const About = props => {


    return (
    <div className={styles.hero}>
        <div className={styles.herotext}>
            <h1 className={styles.text}>
                درباره ما
            </h1>
            <h4 className={styles.text}>
                چرا سایت ما؟
            </h4>
            <p className={styles.text2}>
            ما این سایت را ایجاد کردیم تا انجام نظرسنجی‌ها و رای گیری ها را برای سازمان‌ها 
            </p>
            <p className={styles.text2}>
            و افراد راحت، سریع و کم‌هزینه کنیم و معتقدیم از این راه می‌شود نظرسنجی در 
            </p>
            <p className={styles.text2}>
            سازمان‌ها را بهبود داد، به طوری که آن هارا امن تر و خصوصی تر کنیم و به مشتری‌های
            </p>
            <p className={styles.text2}>
            خود محصولات باکیفیت‌ و مطلوبی ارائه کرده و مشتریان فعلی را وفادار کنیم و مشتریان
            </p>
            <p className={styles.text2}>
            .رقبا را نیز متقاعد به استفاده از محصول خود کنیم
            </p>








            <h4 className={styles.text}>
                :راهکاری در پاسخ به سوالات زیر
            </h4>
            <p className={styles.text2}>
            !مطمئن نیستم محصول جدید، بازاری داشته باشد 
            </p>
            <p className={styles.text2}>
            !نفهمیدم چرا از تبلیغ‌ جدیدمان اینقدر کم استقبال شد 
            </p>
            <p className={styles.text2}>
            !چرا مشتری‌ها با دیدن قیمت کمتر، سراغ انتخاب‌های دیگر می‌روند
            </p>
            <p className={styles.text2}>
            !چرا مشتری‌ها مدام در حال ترک کردن برند ما هستند 
            </p>
            <p className={styles.text2}>
            !ایده فوق‌العاده‌ایست، ولی نمی‌دانم از کجا شروع کنم 
            </p>
            <p className={styles.text2}>
            !پرسشنامه‌ ام را کسی تکمیل نمی‌کند
            </p>


      
        </div>

        <div className={styles.heroimage}>

        </div>


    </div>
    )
}


export default About


