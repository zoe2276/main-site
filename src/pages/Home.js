import * as React from "react";
import { Loading, GlitchingComponent } from "../components";

export function Home() {
  return (
    <>
      <GlitchingComponent parentName="Home" children="welcome." />
      <Loading random />
    </>
  );
}
