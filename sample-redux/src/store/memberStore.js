import { createSlice } from '@reduxjs/toolkit'

export const memberStore = createSlice({
    name: "member",
    initialState: {
        name: ""
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { setName } = memberStore.actions

export default memberStore.reducer;