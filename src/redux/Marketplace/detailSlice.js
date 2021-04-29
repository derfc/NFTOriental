import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    web3: "undefined",
    owner: "",
    contract: null,
    items: [],
    token: [],
};

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        updateWeb3(state, action) {
            state.web3 = action.payload;
        },
        updateCurrentUser(state, action) {
            state.currentUser = action.payload;
        },
        updateContract(state, action) {
            state.contract = action.payload;
        },
        updateItem(state, action) {
            state.items = action.payload;
        },
        updateToken(state, action) {
            state.token = action.payload;
        },
    }
});

export const detailSliceActions = detailSlice.actions;

export default detailSlice;


