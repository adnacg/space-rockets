import React from "react";
import { Routes, Route } from "react-router-dom";

import LaunchList from "./screens/launch-list";
import LaunchDetails from "./screens/launch-details";
import Home from "./screens/home";
import LaunchPadList from "./screens/launch-pad-list";
import LaunchPadDetails from "./screens/launch-pad-details";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/launches" element={<LaunchList />} />
      <Route path="/launches/:launchId" element={<LaunchDetails />} />
      <Route path="/launch-pads" element={<LaunchPadList />} />
      <Route path="/launch-pads/:launchPadId" element={<LaunchPadDetails />} />
    </Routes>
  );
}
