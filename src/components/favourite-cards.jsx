import React, { useContext } from "react";
import { Box, Text, IconButton } from "@chakra-ui/core";
import { useNavigate } from "react-router-dom";
import { favouritesContext } from "../context/favourites";
import { SmallCloseIcon } from "@chakra-ui/icons";

export function FavouriteLaunch({ launch }) {
  const navigate = useNavigate();
  const { removeFavouriteLaunch } = useContext(favouritesContext);

  return (
    <Box
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      p="6"
      onClick={() => navigate(`/launches/${launch.flight_number.toString()}`)}
      height="100px"
      margin="10px auto"
      background={"#f5e0cb"}
      d="flex"
    >
      <Text width="100%" d="flex" justifyContent="center" alignItems="center">
        {launch.mission_name}
      </Text>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          removeFavouriteLaunch(launch.flight_number.toString());
        }}
        icon={SmallCloseIcon}
        style={{
          backgroundColor: "transparent",
          height: "50px",
          boxShadow: "none",
          fontSize: "24px",
        }}
      ></IconButton>
    </Box>
  );
}

export function FavouriteLaunchPad({ launchPad }) {
  const navigate = useNavigate();
  const { removeFavouriteLaunchPad } = useContext(favouritesContext);

  return (
    <Box
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      p="6"
      onClick={() => navigate(`/launch-pads/${launchPad.site_id.toString()}`)}
      height="100px"
      margin="10px auto"
      background={"#c5dced"}
      d="flex"
    >
      <Text width="100%" d="flex" justifyContent="center" alignItems="center">
        {launchPad.name}
      </Text>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          removeFavouriteLaunchPad(launchPad.site_id.toString());
        }}
        icon={SmallCloseIcon}
        style={{
          backgroundColor: "transparent",
          height: "50px",
          boxShadow: "none",
          fontSize: "24px",
        }}
      ></IconButton>
    </Box>
  );
}
