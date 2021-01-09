import { createContext } from "react";

export const FAVOURITES_CONTEXT_DEFAULT_VALUE = {
  favouriteLaunches: {},
  favouriteLaunchPads: {},
  addFavouriteLaunch: () => {},
  removeFavouriteLaunch: () => {},
  addFavouriteLaunchPad: () => {},
  removeFavouriteLaunchPad: () => {},
};

export const favouritesContext = createContext(
  FAVOURITES_CONTEXT_DEFAULT_VALUE
);
