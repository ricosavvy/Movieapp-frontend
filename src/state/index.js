import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    likedmovies: []
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setMovies: (state, action) => {
            state.likedmovies = action.payload.posts;
        },
        setMovie: (state, action) => {
            const updatedLikedMovie = state.likedmovies.map((likedmovies) => {
                if(likedmovies.id === action.payload.likedmovies) return action.payload.likedmovies;
                return likedmovies;
            });
            state.likedmovies = updatedLikedMovie;
        }
    }
})

export const { setLogin, setLogout, setMovie, setMovies } = authSlice.actions;
export default authSlice.reducer;