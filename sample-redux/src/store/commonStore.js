import { createSlice } from '@reduxjs/toolkit'

export const commonStore = createSlice({
    name: "common",
    initialState: {
        count: 0
    },
    reducers: {
        setCount: (state, action) => {
            state.count = action.payload
        }
    }
})

export const { setCount } = commonStore.actions

export default commonStore.reducer;