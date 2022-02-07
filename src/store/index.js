import {createSlice,configureStore} from '@reduxjs/toolkit'



const uiSlice = createSlice({
    name:'ui',
    initialState:{dark:false},
    reducers:{
        toggleDark(state){
            state.dark = !state.dark
            if(state.dark){
                const darkbg = getComputedStyle(document.documentElement).getPropertyValue('--darkbg')
                const darkfont = getComputedStyle(document.documentElement).getPropertyValue('--darkfont')
                const darkfooter = getComputedStyle(document.documentElement).getPropertyValue('--darkfooter')
                const darkheader = getComputedStyle(document.documentElement).getPropertyValue('--darkheader')
                const darkheader2 = getComputedStyle(document.documentElement).getPropertyValue('--darkheader2')
                const darkbod = getComputedStyle(document.documentElement).getPropertyValue('--darkbod')
                const darkham = getComputedStyle(document.documentElement).getPropertyValue('--darkhamimage')
                const darkdash = getComputedStyle(document.documentElement).getPropertyValue('--darkdashimage')
                const darkhome = getComputedStyle(document.documentElement).getPropertyValue('--darkhomeimage')
                
                
                
                document.documentElement.style.setProperty('--selectedbg',darkbg)
                document.documentElement.style.setProperty('--selectedfont',darkfont)
                document.documentElement.style.setProperty('--selectedfooter',darkfooter)
                document.documentElement.style.setProperty('--selectedheader',darkheader)
                document.documentElement.style.setProperty('--selectedheader2',darkheader2)
                document.documentElement.style.setProperty('--selectedbod',darkbod)
                document.documentElement.style.setProperty('--selectedhamimage',darkham)
                document.documentElement.style.setProperty('--selectedhomeimage',darkhome)
                document.documentElement.style.setProperty('--selecteddashimage',darkdash)
            }
            else{
                const lightbg = getComputedStyle(document.documentElement).getPropertyValue('--lightbg')
                const lightfont = getComputedStyle(document.documentElement).getPropertyValue('--lightfont')
                const lightfooter = getComputedStyle(document.documentElement).getPropertyValue('--lightfooter')
                const lightheader = getComputedStyle(document.documentElement).getPropertyValue('--lightheader')
                const lightheader2 = getComputedStyle(document.documentElement).getPropertyValue('--lightheader2')
                const lightbod = getComputedStyle(document.documentElement).getPropertyValue('--lightbod')
                const lightham = getComputedStyle(document.documentElement).getPropertyValue('--lighthamimage')
                const lightdash = getComputedStyle(document.documentElement).getPropertyValue('--lightdashimage')
                const lighthome = getComputedStyle(document.documentElement).getPropertyValue('--lighthomeimage')
                
                document.documentElement.style.setProperty('--selectedbg',lightbg)
                document.documentElement.style.setProperty('--selectedfont',lightfont)
                document.documentElement.style.setProperty('--selectedfooter',lightfooter)
                document.documentElement.style.setProperty('--selectedheader',lightheader)
                document.documentElement.style.setProperty('--selectedheader2',lightheader2)
                document.documentElement.style.setProperty('--selectedbod',lightbod)
                document.documentElement.style.setProperty('--selectedhamimage',lightham)
                document.documentElement.style.setProperty('--selectedhomeimage',lighthome)
                document.documentElement.style.setProperty('--selecteddashimage',lightdash)
            }
        }
    }
})







const store = configureStore({
    reducer:{
        ui:uiSlice.reducer
    }
})



export default store
export const uiActions = uiSlice.actions
