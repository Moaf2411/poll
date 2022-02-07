import styles from './main.module.css'
import React,{useState,useEffect} from 'react'
import {Link,useLocation,Route,Routes} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

import { uiActions } from '../store'

import Home from '../pages/home'
import About from '../pages/About'



const Main = props => { 
    const loc = useLocation().pathname
    const [isActive,setActive] = useState(loc)
    const sel = styles.sel
    const dispatch = useDispatch()
    const mode = useSelector(state => state.ui.dark)

    useEffect(()=>{
        setActive(loc)
    },[loc])


    function changemodedark(){
        dispatch(uiActions.toggleDark())
    }
    function changemodelight(){
        dispatch(uiActions.toggleDark())
    }




    return(



        <div className={styles.body}>
            

            <div className={styles.navbar}>
                <div className={styles.wrap}>

                    <div className={styles.links}>
                        <ul className={styles.list}>
                            <li> <Link to='/Home' className={`${isActive === '/Home' ? sel:''} ${styles.link}`}>صفحه اصلی</Link> </li>
                            <li> <Link to='/products' className={`${isActive === '/products' ? sel:''} ${styles.link}`}>محصولات</Link> </li>
                            <li> <Link to='/prices' className={`${isActive === '/prices' ? sel:''} ${styles.link}`}>قیمت ها</Link> </li>
                            <li> <Link to='/docs' className={`${isActive === '/docs' ? sel:''} ${styles.link}`}>راهنما</Link> </li>
                            <li> <Link to='/about' className={`${isActive === '/about' ? sel:''} ${styles.link}`}>درباره</Link> </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.butts}>
                    <button className={styles.sign}>
                        ثبت نام
                    </button>
                    <button className={`${styles.dash} ${mode?styles.darkdash:''}`} onClick={props.dash}>
                        داشبورد
                    </button>
                </div>
            </div>







        

        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
       










            <div className={styles.footer}>

                <div className={styles.productsfoot}>
                    <ul className={styles.footlinks}>
                        <li className={styles.head}>محصولات</li>
                        <li>راهکار ها</li>
                        <li>قیمت ها</li>
                        <li>ویژگی ها</li>
                    </ul>
                </div>


                <div className={styles.bfoot}>
                    <ul className={styles.footlinks}>
                        <li className={styles.head}>پشتیبانی</li>
                        <li>راهنما</li>
                        <li>سوال های متداول</li>
                        <li>ارتباط</li>
                    </ul>
                </div>



                <div className={styles.aboutfoot}>
                    <ul className={styles.footlinks}>
                        <li className={styles.head}>درباره</li>
                        <li>درباره ما</li>
                        <li>تماس با ما</li>
                        <li>نشانی</li>
                    </ul>
                </div>




                <div className={styles.docfoot}>
                    <ul className={styles.footlinks}>
                        <li className={styles.head}>مستندات</li>
                        <li>راهنمای استفاده</li>
                        <li>فرم های آماده</li>
                        <li>نمونه نظر سنجی ها</li>
                    </ul>
                </div>




                <div className={styles.proffoot}>
                    <ul className={styles.footlinks}>
                        <li className={styles.head}>حساب کاربری</li>
                        <li>ثبت نام</li>
                        <li>ورود به حساب کاربری</li>
                        <li>داشبورد</li>
                    </ul>
                </div>




                <div className={styles.textfoot}>
                    <p>
                       Dark Planet شرکتی است که سعی داشته با استفاده از هوشمند سازی کار های مشتریان خود را ساده تر و سازمان یافته تر کند و با ارائه پلتفرمی بر بستر وب این امکان را برای کاربران فراهم کند که هرچه راحت تر فرم های نظرسنجی خود را با متن دلخواه خود ساخته و آن را در هر جا که میخواهند به اشتراک بگذارند 
                    </p>
                </div>




                <div className={styles.followfoot}>
                    <ul className={styles.footlinks}>
                        <li className={styles.head}>!با ما همراه باشید</li>
                        <li>@Dark Planet</li>
                    </ul>
                </div>


                <div className={styles.mode}>
                    <div className={`${styles.dark} ${mode?styles.darked:''}`} onClick={changemodedark}>Dark</div>
                    <div className={`${styles.light} ${!mode?styles.lighted:''}`} onClick={changemodelight}>Light</div>
                </div>



            </div>

        </div>


        
    )

}



export default Main