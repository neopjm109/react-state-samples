import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './commonStore'
import memberReducer from './memberStore'
export default configureStore({
    reducer: {
        common: commonReducer,
        member: memberReducer
    }
})