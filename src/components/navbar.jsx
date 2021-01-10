import React, { useContext } from "react";
import { Flex, Text, IconButton } from "@chakra-ui/core";
import FavouriteList from "./favourite-list";
import { favouritesContext } from "../context/favourites";
import { StarIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const { openFavourites } = useContext(favouritesContext);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg="gray.800"
      color="white"
    >
      <Text
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize="lg"
      >
        ¡SPACE·R0CKETS!
      </Text>
      <IconButton
        onClick={() => {
          openFavourites();
        }}
        icon={StarIcon}
        style={{
          backgroundColor: "transparent",
          color: "#ffe082",
          fontSize: "30px",
        }}
      >
        Open
      </IconButton>
      <FavouriteList />
    </Flex>
  );
}
