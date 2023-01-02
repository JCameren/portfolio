import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import * as uiServices from "../../utilities/ui-services"

const initialState = {
    isLightMode: uiServices.checkLocalStorage()
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.isLightMode = !state.isLightMode
        },
    },
    extraReducers: {
        [HYDRATE]: (state) => {
            return {
                ...state
            }
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice