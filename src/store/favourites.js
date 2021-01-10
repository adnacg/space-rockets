import { useDisclosure } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { removeItem } from "../utils/helpers";

const LAUNCHES_KEY = "launches";
const LAUNCH_PADS_KEY = "launchPads";

export const useFavouritesStore = () => {
  const {
    isOpen: isFavouritesOpen,
    onClose: closeFavourites,
    onOpen: openFavourites,
  } = useDisclosure();

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

  const addFavouriteLaunch = (launch) => {
    setFavouriteLaunches({
      ...favouriteLaunches,
      [launch.flight_number.toString()]: launch,
    });
  };
  const addFavouriteLaunchPad = (launchPad) => {
    setFavouriteLaunchPads({
      ...favouriteLaunchPads,
      [launchPad.site_id]: launchPad,
    });
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
    isFavouritesOpen,
    openFavourites,
    closeFavourites,
    favouriteLaunches,
    favouriteLaunchPads,
    addFavouriteLaunch,
    removeFavouriteLaunch,
    addFavouriteLaunchPad,
    removeFavouriteLaunchPad,
  };
};
