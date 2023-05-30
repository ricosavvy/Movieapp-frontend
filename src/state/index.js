import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    watchlater: null
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
        setIsReviews: (state, action) => {
            state.isReviews = action.payload.isReviews;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
            state.watchlater = null
        },
        setWatchLater: (state, action) => {
            state.watchlater = action.payload.watchlaters;
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

export const { setUser, setToken, setIsReviews, setLogout, setMovie, setWatchLater } = authSlice.actions;
export default authSlice.reducer;