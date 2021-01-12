import React, { useState } from "react";
import { Input, SimpleGrid } from "@chakra-ui/core";

import Error from "../components/error";
import Breadcrumbs from "../components/breadcrumbs";
import LoadMoreButton from "../components/load-more-button";
import { useSpaceXPaginated } from "../hooks/use-space-x";
import LaunchPadCard from "../components/launch-pad-card";

const PAGE_SIZE = 12;

export default function LaunchPadList() {
  const [query, setQuery] = useState("");
  const { data, error, isValidating, size, setSize } = useSpaceXPaginated(
    "/launchpads",
    {
      limit: PAGE_SIZE,
    }
  );

  return (
    <div>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Launch Pads" }]}
      />
      <Input
        placeholder="Search launch pad name"
        marginLeft="25px"
        width="50%"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></Input>
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {data &&
          data
            .flat()
            .filter((launchPad) =>
              launchPad.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((launchPad) => (
              <LaunchPadCard key={launchPad.site_id} launchPad={launchPad} />
            ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </div>
  );
}
