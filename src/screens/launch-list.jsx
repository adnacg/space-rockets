import React, { useState } from "react";
import { Input, SimpleGrid } from "@chakra-ui/core";

import { useSpaceXPaginated } from "../hooks/use-space-x";
import Error from "../components/error";
import Breadcrumbs from "../components/breadcrumbs";
import LoadMoreButton from "../components/load-more-button";
import { LaunchCard } from "../components/launch-card";

const PAGE_SIZE = 12;

export default function LaunchList() {
  const [query, setQuery] = useState("");
  const { data, error, isValidating, setSize, size } = useSpaceXPaginated(
    "/launches/past",
    {
      limit: PAGE_SIZE,
      order: "desc",
      sort: "launch_date_utc",
    }
  );

  return (
    <>
      <div style={{ position: "relative" }}>
        <Breadcrumbs
          items={[{ label: "Home", to: "/" }, { label: "Launches" }]}
        />
        <Input
          placeholder="Search mission"
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
              .filter((launch) =>
                launch.mission_name.toLowerCase().includes(query.toLowerCase())
              )
              .map((launch) => (
                <LaunchCard launch={launch} key={launch.flight_number} />
              ))}
        </SimpleGrid>
        <LoadMoreButton
          loadMore={() => setSize(size + 1)}
          data={data}
          pageSize={PAGE_SIZE}
          isLoadingMore={isValidating}
        />
      </div>
    </>
  );
}
