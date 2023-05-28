import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    watchlater: [{}]
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        setToken: (state, action) => {
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
            state.watchlater = null
        },
        setMovies: (state, action) => {
            state.watchlater = action.payload.movies;
        },
        setMovie: (state, action) => {
            const updatedwatch = state.watchlater.map((watchlater) => {
                if(watchlater.id === action.payload.watchlater) return action.payload.watchlater;
                return watchlater;
            });
            state.watchlater = updatedwatch;
        }
    }
})

export const { setUser, setToken, setLogout, setMovie, setMovies } = authSlice.actions;
export default authSlice.reducer;