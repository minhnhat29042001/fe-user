import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startUpTime: Date.now().toString(),
  finishTime: Date.now().toString()
};

const startUpSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    callStartUp(state) {
      state.startUpTime = Date.now().toString();
    },
    finishStartUp(state) {
      state.finishTime = Date.now().toString();
    }
  }
});

export default startUpSlice;
