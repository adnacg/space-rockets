import React from "react";

import { useFavouritesStore } from "./store/favourites";
import { favouritesContext } from "./context/favourites";
import NavBar from "./components/navbar";
import Router from "./router";

export default function App() {
  const favourites = useFavouritesStore();

  return (
    <div>
      <favouritesContext.Provider value={favourites}>
        <NavBar />
        <Router />
      </favouritesContext.Provider>
    </div>
  );
}
