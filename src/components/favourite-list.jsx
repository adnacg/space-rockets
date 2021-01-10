import React, { useContext } from "react";
import { Box, Heading } from "@chakra-ui/core";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { favouritesContext } from "../context/favourites";
import { FavouriteLaunch, FavouriteLaunchPad } from "./favourite-cards";

export default function FavouriteList() {
  const {
    isFavouritesOpen,
    closeFavourites,
    favouriteLaunches,
    favouriteLaunchPads,
  } = useContext(favouritesContext);

  return (
    <Drawer
      isOpen={isFavouritesOpen}
      placement="right"
      onClose={closeFavourites}
      size="xs"
      style={{ marginTop: "10px" }}
    >
      <DrawerOverlay style={{ top: "88px" }}>
        <DrawerContent
          boxShadow="md"
          style={{
            backgroundColor: "#e1f5fe",
            width: "30%",
            height: "90vh",
            marginTop: "88px",
            overflow: "scroll",
            border: "solid 1px",
          }}
        >
          <Box
            margin="10px"
            d="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            justifyItems="center"
          >
            <DrawerHeader>
              <Heading size="lg">My Favourites</Heading>
            </DrawerHeader>
            <DrawerBody width="100%">
              <Heading size="md">
                Launches ({Object.keys(favouriteLaunches).length})
              </Heading>
              {Object.keys(favouriteLaunches).map((launchId) => (
                <FavouriteLaunch
                  key={launchId}
                  launch={favouriteLaunches[launchId]}
                />
              ))}
              <Heading size="md">
                Launch Pads ({Object.keys(favouriteLaunchPads).length})
              </Heading>
              {Object.keys(favouriteLaunchPads).map((launchPadId) => (
                <FavouriteLaunchPad
                  key={launchPadId}
                  launchPad={favouriteLaunchPads[launchPadId]}
                />
              ))}
            </DrawerBody>
          </Box>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
