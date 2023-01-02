import { createSlice } from "@reduxjs/toolkit";
import * as uiServices from "../../utilities/ui-services"

const initialState = {
    isLightMode: uiServices.checkLocalStorage()
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setToLightMode() {
            localStorage.setItem("theme", "light")
            uiServices.checkLocalStorage()
        },
        setToDarkMode() {
            localStorage.removeItem("theme")
            uiServices.checkLocalStorage()
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice