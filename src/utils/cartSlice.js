import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items : [],
    },
    reducers : {
        addItem: (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearAllItems : (state) => {
            state.items.length = 0;
        }
    },

})


// console.log(typeof cartSlice);

// So our cart slice has these two properties, 
// action and reducer and we are exporting them

// {
//     action : {

//     },
//     reducer : {

//     }
// }


//these individual reducer functions goes in our different components.
export const {addItem, removeItem, clearAllItems} = cartSlice.actions;

//this goes in our appStore
export default cartSlice.reducer;