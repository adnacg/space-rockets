import React, { useContext, useState } from "react";
import { Box, Heading, Input } from "@chakra-ui/core";
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
  const [query, setQuery] = useState("");
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
          className="favourites-drawer"
          boxShadow="lg"
          style={{
            backgroundColor: "white",
            width: "30%",
            minWidth: "250px",
            height: "90vh",
            marginTop: "12vh",
            overflow: "scroll",
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
              <Heading size="lg" p="6">
                Favourites
              </Heading>
              <Input
                placeholder="Search favourite"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              ></Input>
            </DrawerHeader>
            <DrawerBody width="100%">
              <Heading size="md" p="3">
                Launches ({Object.keys(favouriteLaunches).length})
              </Heading>
              {Object.keys(favouriteLaunches)
                .filter((launchId) =>
                  favouriteLaunches[launchId].mission_name
                    .toLowerCase()
                    .includes(query.toLowerCase())
                )
                .map((launchId) => (
                  <FavouriteLaunch
                    key={launchId}
                    launch={favouriteLaunches[launchId]}
                  />
                ))}
              <Heading size="md" p="3">
                Launch Pads ({Object.keys(favouriteLaunchPads).length})
              </Heading>
              {Object.keys(favouriteLaunchPads)
                .filter((launchPadId) =>
                  favouriteLaunchPads[launchPadId].name
                    .toLowerCase()
                    .includes(query.toLowerCase())
                )
                .map((launchPadId) => (
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
