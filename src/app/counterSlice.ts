import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers : { //yapılacak olan işlemler (actions)
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            if(state.value == 0) {
                return;
            }
            state.value -= 1;
        },
        reset: () => initialState,
        incrementByAmount(state, action: PayloadAction<number>) {  //number titpnde bi şey gönderyoruz. Payload REduxtan geliyor.
            state.value += action.payload
        }
    }
})

//export const increment = counterSlice.actions.increment;
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;  //store da kullanncakç 
