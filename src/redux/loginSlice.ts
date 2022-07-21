import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";
import type { PayloadAction } from '@reduxjs/toolkit'

type userLogin = {
  email: string,
  password: string
}

// First, create the thunk
export const userFetch = createAsyncThunk(
  'userLogin',
  // Declare the type your function argument here:
  (user: userLogin) => {
    const { email, password } = user;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential)
      .catch((error) => error);
  }
)

interface UsersState {
  playerList: {
    status: string;
    data: {},
    error: {}
  }
  loading?: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const teamInitialState = {
  playerList: {
    status: "idle",
    data: {},
    error: {},
  },
} as UsersState;

// Then, handle actions in your reducers:
export const loginSlice = createSlice({
  name: "user",
  initialState: teamInitialState,
  reducers: {},
  extraReducers: {
    [userFetch.pending.type]: (state, action) => {
      state.playerList = {
        status: "loading",
        data: {},
        error: {},
      };
    },
    [userFetch.fulfilled.type]: (state, action) => {
      console.log(action.payload);
      state.playerList = {
        status: "idle",
        data: action.payload,
        error: {},
      };
    },
    [userFetch.rejected.type]: (state, action) => {
      state.playerList = {
        status: "idle",
        data: {},
        error: action.payload,
      };
    },
  },
});

export default loginSlice.reducer
// // Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))