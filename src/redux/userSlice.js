import { createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {}
    },
    reducers: {
        storeUser: (state, action) => {
            state.user = action.payload
        },
        setRole: (state, action) => {
            state.user.role = action.payload
        },
        setIndustry: (state, action) => {
            state.user.industryId = action.payload
        },
        setPaired: (state, action) => {
            state.user.paired = action.payload
        },
        setFlow: (state, action) => {
            state.user.flow = action.payload
        }
    },
})
export const { storeUser, setRole, setIndustry, setPaired, setFlow } = userSlice.actions
export default userSlice.reducer
