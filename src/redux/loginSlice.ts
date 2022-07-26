import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signInWithEmailAndPassword, } from "firebase/auth";
import { auth } from '../firebase';
interface userLogin {
  email: string;
  password: string;
}

type demo = {
  id: number,
  nombre: string
}

// First, create the thunk
export const userFetch = createAsyncThunk('users/fetchUser',
  // if you type your function argument here
  async (user: userLogin) => {
    const { email, password } = user;
    console.log('userfetched', email, password)
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log('usercredential', userCredential)
        return userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log('error', error)
        return error
      });
  });

export interface userState {
  user: object | null | void;
  status: 'idle' | 'loading' | 'failed';
  isAuth: boolean;
  message: string;
}
const initialState: userState = {
  user: null,
  status: 'idle',
  isAuth: false,
  message: '',
};

// Then, handle actions in your reducers:
export const loginSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userFetch.pending, (state) => {
        console.log('pending', state)
        state.status = 'loading';
        state.isAuth = false;
      })
      .addCase(userFetch.fulfilled, (state, action) => {
        console.log('fullfilled', state)
        state.status = 'idle';
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(userFetch.rejected, (state, action) => {
        console.log('rejected', state)
        state.status = 'failed';
        state.isAuth = false;
        if (action.payload) {
          state.message = action.payload;
        }
      });
  },
});

export default loginSlice.reducer
// // Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))