import React, { useContext } from "react";
import { Star } from "react-feather";
import { IconButton } from "@chakra-ui/core";
import { favouritesContext } from "../context/favourites";

function FavouriteIcon() {
  return <Star stroke="black" fill="#ffe082" />;
}

function NotFavouriteIcon() {
  return <Star stroke="black" fill="white" />;
}

export function AddFavLaunchButton({ launch }) {
  const {
    favouriteLaunches,
    addFavouriteLaunch,
    removeFavouriteLaunch,
  } = useContext(favouritesContext);

  if (
    Object.keys(favouriteLaunches).includes(launch.flight_number.toString())
  ) {
    return (
      <IconButton
        className="favourite-button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          removeFavouriteLaunch(launch.flight_number.toString());
        }}
        icon={FavouriteIcon}
        style={{
          backgroundColor: "transparent",
          height: "20px",
          boxShadow: "none",
        }}
      >
        Open
      </IconButton>
    );
  } else {
    return (
      <IconButton
        className="not-favourite-button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          addFavouriteLaunch(launch);
        }}
        icon={NotFavouriteIcon}
        style={{
          backgroundColor: "transparent",
          height: "20px",
          boxShadow: "none",
        }}
      >
        Open
      </IconButton>
    );
  }
}

export function AddFavLaunchPadButton({ launchPad }) {
  const {
    favouriteLaunchPads,
    addFavouriteLaunchPad,
    removeFavouriteLaunchPad,
  } = useContext(favouritesContext);

  if (Object.keys(favouriteLaunchPads).includes(launchPad.site_id.toString())) {
    return (
      <IconButton
        className="favourite-button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          removeFavouriteLaunchPad(launchPad.site_id.toString());
        }}
        icon={FavouriteIcon}
        style={{
          backgroundColor: "transparent",
          height: "20px",
          boxShadow: "none",
        }}
      >
        Open
      </IconButton>
    );
  } else {
    return (
      <IconButton
        className="not-favourite-button"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          addFavouriteLaunchPad(launchPad);
        }}
        icon={NotFavouriteIcon}
        style={{
          backgroundColor: "transparent",
          height: "20px",
          boxShadow: "none",
        }}
      >
        Open
      </IconButton>
    );
  }
}
