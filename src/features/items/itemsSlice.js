import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addItemdb, deleteItemFromDb,getItemFromDb } from "../../indexedDB";


export const fetchItems = createAsyncThunk('items/fetchItems', async()=>{
    const items = await getItemFromDb()
    return items;
});


const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        updateItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteItem: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    },

    extraReducers: (builder)=>{
        builder.addCase(fetchItems.fulfilled,(state, action) => {
            return action.payload;
        })
    },
});


export const {addItem, updateItem, deleteItem} = itemsSlice.actions;
export default itemsSlice.reducer