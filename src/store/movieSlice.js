import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bannerData: [],
  ImageUrl: "" // Corrected typo from 'ImageURl' to 'ImageUrl'
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageUrl: (state, action) => {
      state.ImageUrl = action.payload; // Corrected typo
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBannerData, setImageUrl } = movieSlice.actions;

export default movieSlice.reducer;