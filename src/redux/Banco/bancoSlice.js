import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
require("dotenv").config();

const initialState = {
	// web3: "undefined",
	account: "",
	ethBalance: 0,
	cchBalance: 0,
	targetAccount: "",
	// token: null,
	// banco: null,
	depositAmount: 0,
	transferAmount: 0,
	transaction: [],
	loading: true,
	loadingTransaction: true,
	showTransactionHistory: false,
};

const bancoSlice = createSlice({
	name: "banco",
	initialState,
	reducers: {
		getTransaction(state, action) {
			state.transaction = [...action.payload];
		},
		// addTransaction(state, action) {
		// 	// state.transaction.push(action.payload);
		// 	state.transaction = [...state.transaction, action.payload];
		// },
		updateWeb3(state, action) {
			state.web3 = action.payload;
		},
		updateAccount(state, action) {
			state.account = action.payload;
		},
		updateEthBalance(state, action) {
			state.ethBalance = action.payload;
		},
		updateCchBalance(state, action) {
			state.cchBalance = action.payload;
		},
		updateTargetAccount(state, action) {
			state.targetAccount = action.payload;
		},
		updateBanco(state, action) {
			state.banco = action.payload;
		},
		updateToken(state, action) {
			state.token = action.payload;
		},
		updateDepositAmount(state, action) {
			state.depositAmount = action.payload;
		},
		updateTransferAmount(state, action) {
			state.transferAmount = action.payload;
		},
		toggleLoading(state, action) {
			state.loading = action.payload;
		},
		toggleTransactionLoading(state, action) {
			state.loadingTransaction = action.payload;
		},
		toggleTransactionHistory(state, action) {
			state.showTransactionHistory = !state.showTransactionHistory;
		},
	},
});

export const bancoSliceActions = bancoSlice.actions;

export const getTransactionThunk = (address) => async (dispatch) => {
	console.log("getlinkthunk");
	const getTransactionRequest = async () => {
		return await axios.get(`http://localhost:8000/transaction/${address}`);
	};
	try {
		let res = await getTransactionRequest();
		dispatch(bancoSliceActions.getTransaction(res.data));
	} catch (err) {
		console.log("get transaction fail", err);
	}
};

export const addTransactionThunk = (newTransactionData) => async (dispatch) => {
	console.log("am i here?", newTransactionData);
	const addTransactionRequest = async () => {
		return await axios.post(
			`http://localhost:8000/transaction`,
			newTransactionData
		);
	};
	try {
		await addTransactionRequest();
		// dispatch(bancoSliceActions.addTransaction(newTransactionData));
	} catch (err) {
		console.log("add new transaction fail", err);
	}
};

export default bancoSlice;
