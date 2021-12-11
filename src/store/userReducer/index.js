import { createSlice } from '@reduxjs/toolkit';

export const REDUCER_NAME = 'userAccount';

const userAccountSlices = createSlice({
  name: REDUCER_NAME,
  initialState: {
    isLogin: false,
    code: undefined,
    groupCL: undefined,
    groupCG: undefined,
    groupDG: undefined,
    groupTL: undefined,
    listOrderCL: undefined,
  },
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    setCode(state, action) {
      state.code = action.payload;
    },
    setGroupCL(state, action) {
      state.groupCL = action.payload;
    },
    setGroupCG(state, action) {
      state.groupCG = action.payload;
    },
    setGroupDG(state, action) {
      state.groupDG = action.payload;
    },
    setGroupTL(state, action) {
      state.groupTL = action.payload;
    },
    setListOrderCL(state, action) {
      state.listOrderCL = action.payload;
    },
  },
});

export const userAccountActions = {
  ...userAccountSlices.actions,
};

export default userAccountSlices.reducer;
