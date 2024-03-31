import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    challenges :[],

}

const challengesSlice = createSlice({
    name: 'challenges',
    initialState,
    reducers: {
     
        setChallenges: (state, action) => {
            state.challenges = action.payload;
        },
       
        
    }
})

export const { setChallenges } = challengesSlice.actions;
export default challengesSlice.reducer;