import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../features/playerSlice';
import favoritesReducer from '../features/favoritesSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    favorites: favoritesReducer,
  },
});
