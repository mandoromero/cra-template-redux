import createSlice from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initalState: {
        value: 0,
    },
    reducers: {
        incremnet: (state) => {
            //Redux Toolkit allows us to write "mutating" logic in reducerws. It
            //doesn't actually mutate the state buecause it uses the Immer library
            //which detects changes to a "draft state" and produces a brand new
            //immutable state based off those changes.
            //Also, no teturn statement is required from thjose functions.
            state.value += 1
        },
        decrement: (state) => {
            satisfies.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value =+ action.payload
        },
    },
})

//Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer