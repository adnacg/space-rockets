import React from "react";
import { Box, Link, Text } from "@chakra-ui/core";
import { useNavigate } from "react-router-dom";

export function FavouriteLaunch({ launch }) {
  const navigate = useNavigate();
  return (
    <Box
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      p="6"
      onClick={() => navigate(`/launches/${launch.flight_number.toString()}`)}
      height="100px"
      margin="10px auto"
      backgroundColor={"white"}
    >
      <Text width="100%">{launch.mission_name}</Text>
    </Box>
  );
}

export function FavouriteLaunchPad({ launchPad }) {
  return (
    <Box
      as={Link}
      to={`/launchPad/${launchPad.site_id.toString()}`}
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      p="6"
      width="80%"
      height="100px"
      margin="10px auto"
    >
      <Box>{launchPad.site_id.toString()}</Box>
      <Box></Box>
    </Box>
  );
}
