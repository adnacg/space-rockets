import { useEffect, useState } from "react";
import { removeItem } from "../utils/helpers";

const LAUNCHES_KEY = "launches";
const LAUNCH_PADS_KEY = "launchPads";

export const useFavourites = () => {
  const [favouriteLaunches, setFavouriteLaunches] = useState(
    () => JSON.parse(localStorage.getItem(LAUNCHES_KEY)) || {}
  );
  const [favouriteLaunchPads, setFavouriteLaunchPads] = useState(
    () => JSON.parse(localStorage.getItem(LAUNCH_PADS_KEY)) || {}
  );

  useEffect(() => {
    localStorage.setItem(LAUNCHES_KEY, JSON.stringify(favouriteLaunches));
  }, [favouriteLaunches]);
  useEffect(() => {
    localStorage.setItem(LAUNCH_PADS_KEY, JSON.stringify(favouriteLaunchPads));
  }, [favouriteLaunchPads]);

  const addFavouriteLaunch = (launchId) => {
    setFavouriteLaunches({ ...favouriteLaunches, [launchId]: {} });
  };
  const addFavouriteLaunchPad = (launchPadId) => {
    setFavouriteLaunchPads({ ...favouriteLaunchPads, [launchPadId]: {} });
  };

  const removeFavouriteLaunch = (launchId) => {
    const newLaunches = removeItem(favouriteLaunches, launchId);
    setFavouriteLaunches(newLaunches);
  };
  const removeFavouriteLaunchPad = (launchPadId) => {
    const newLaunchPads = removeItem(favouriteLaunchPads, launchPadId);
    setFavouriteLaunchPads(newLaunchPads);
  };

  return {
    favouriteLaunches,
    favouriteLaunchPads,
    addFavouriteLaunch,
    removeFavouriteLaunch,
    addFavouriteLaunchPad,
    removeFavouriteLaunchPad,
  };
};
