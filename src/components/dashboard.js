import styles from './dashboard.module.css'
import {Link,useLocation,Route,Routes} from 'react-router-dom'
import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { uiActions } from '../store'
import History from './history'

const hist = {
    heading:'تاریخچه فعالیت ها',
    arr:[
        {list:['نظرسنجی های ساخته شده','نظرسنجی 1','نظرسنجی 2']},
        {list:['پاسخ ها','پاسخ 1','پاسخ 2']},
        {list:['نظرسنجی های نشان شده','نظرسنجی 1','نظرسنجی 2']},
        {list:['صورت حساب ها']}
    ]
}
const ne = {
    heading:'ایجاد نظرسنجی جدید',
    arr:[
        {list:['استفاده از فرم های آماده','فرم 1','فرم 2']},
        {list:['انتقال به صفحه ایجاد نظرسنجی جدید']},
        {list:['فرم های نشان شده','فرم 1','فرم 2']}
    ]
}
const set = {
    heading:'تنظیمات',
    arr:[
        {list:['ویرایش اطلاعات حساب کاربری']},
        {list:['تغییر تصویر کاربری']},
        {list:['تنظیمات شخصی سازی']}
    ]
}









const Dashboard = props => {
    const dispatch = useDispatch()
    const mode = useSelector(state => state.ui.dark)
    const [sel,setSel] = useState('history')
    const [cont,setcont] = useState(hist)
    const [isham,setHam] = useState(false)

    
    function changemodedark(){
        dispatch(uiActions.toggleDark())
    }
    function changemodelight(){
        dispatch(uiActions.toggleDark())
    }
    function gohome(){
        props.home()
    }

    function selecthist(){
        setSel('history')
        setcont(hist)
    }
    
    function selectmake(){
        setSel('make')
        setcont(ne)
    }
    
    function selectsettings(){
        setSel('settings')
        setcont(set)
    }

    function openhamb(){
        setHam(true)
    }

    function closehamb(){
        setHam(false)
    }

    return (
     <div className={styles.wrapper}>
         <div className={`${styles.modal} ${isham? '':styles.die}`}></div>


        <div className={`${styles.hamb} ${isham? styles.open:styles.close}`}>
            <ul className={styles.list1}>
                <li> <Link to='/Home' className={styles.link} onClick={gohome}>صفحه اصلی</Link> </li>
                <li> <Link to='/products' className={styles.link} onClick={gohome}>محصولات</Link> </li>
                <li> <Link to='/prices' className={styles.link} onClick={gohome}>قیمت ها</Link> </li>
                <li> <Link to='/docs' className={styles.link} onClick={gohome}>راهنما</Link> </li>
                <li> <Link to='/about' className={styles.link} onClick={gohome}>درباره</Link> </li>
                <li className={styles.link} onClick={closehamb}> بستن</li>
            </ul>
        </div> 

        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.ham} onClick={openhamb}/>
                <div className={styles.home} onClick={gohome} />
                <div className={styles.dash}/>
            </div>

            <History content={cont} />

            <hr className={styles.line} />
            <div className={styles.footer}>
                <div className={styles.logo}>@Dark Planet</div>
                <div className={styles.mode}>
                    <div className={`${styles.dark} ${mode?styles.darked:''}`} onClick={changemodedark}>Dark</div>
                    <div className={`${styles.light} ${!mode?styles.lighted:''}`} onClick={changemodelight}>Light</div>
                </div>
            </div>

        </div>










        <div className={styles.rightside}>

            <div className={styles.profile}>

            </div>

            <div className={styles.options}>
                <ul className={`${styles.list} ${sel==='history' ? styles.selected:''}`} >
                    <li className={styles.listhead} onClick={selecthist}>تاریخچه فعالیت ها</li>
                    <li className={styles.item} onClick={selecthist}>نظرسنجی های ساخته شده</li>
                    <li className={styles.item} onClick={selecthist}>تاریخچه پاسخ ها</li>
                    <li className={styles.item} onClick={selecthist}>صورت حساب ها</li>
                </ul>

                <ul className={`${styles.list} ${sel==='make' ? styles.selected:''}`} >
                    <li className={styles.listhead} onClick={selectmake}>ایجاد نظرسنجی جدید</li>
                    <li className={styles.item} onClick={selectmake}>استفاده از فرم های آماده</li>
                    <li className={styles.item} onClick={selectmake}>انتقال به صفحه ایجاد نظرسنجی جدید</li>
                </ul>


                <ul className={`${styles.list} ${sel==='settings' ? styles.selected:''}`} >
                    <li className={styles.listhead} onClick={selectsettings}>تنظیمات</li>
                    <li className={styles.item} onClick={selectsettings}>ویرایش اطلاعات حساب کاربری</li>
                    <li className={styles.item} onClick={selectsettings}>تغییر تصویر کاربری</li>
                </ul>

            </div>


        </div>


     </div>

)
}




export default Dashboard