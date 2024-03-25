import * as React from "react";
import { GlitchingComponent } from "../components";

export function About() {
  return (
    <div id="about-page-container">
      <GlitchingComponent
        children={"const xo = ("}
        parentName={"Pages-About"}
        compInd="0"
      />
      <a href="https://discordapp.com/users/183833629238099969">
        <img
          class="discord-logo"
          src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png"
        />
      </a>
      <span>, </span>
      <a href="https://www.instagram.com/iamnewzealand/">
        <img
          class="instagram-logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Finstagram%2Finstagram_PNG10.png&f=1&nofb=1&ipt=4a45a9cbce6334066656e422987ff1e716d9f424e0da3ad6098231a9a9446652&ipo=images"
        />
      </a>
      <GlitchingComponent
        children={" ) => {"}
        parentName={"Pages-About"}
        compInd="0"
      />
      <br />
      <br />
      <GlitchingComponent
        children={"\tit's too late to be beautiful"}
        parentName={"Pages-About"}
        compInd="1"
      />
      <br />
      <br />
      <GlitchingComponent
        children={"};"}
        parentName={"Pages-About"}
        compInd="2"
      />
      <br />
      <br />
      <GlitchingComponent
        children={"const boxy = ("}
        parentName={"Pages-About"}
        compInd="3"
      />
      <a href="https://discordapp.com/users/715726130664964127">
        <img
          class="discord-logo"
          src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png"
        />
      </a>
      <span>, </span>
      <a href="https://www.instagram.com/notfranshals/">
        <img
          class="instagram-logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Finstagram%2Finstagram_PNG10.png&f=1&nofb=1&ipt=4a45a9cbce6334066656e422987ff1e716d9f424e0da3ad6098231a9a9446652&ipo=images"
        />
      </a>
      <GlitchingComponent
        children={" ) => {"}
        parentName={"Pages-About"}
        compInd="3"
      />
      <br />
      <br />
      <GlitchingComponent
        children={"is it the goodbyes that haunt you or the fear of new hellos"}
        parentName={"Pages-About"}
        compInd="4"
      />
      <br />
      <br />
      <GlitchingComponent
        children={"};"}
        parentName={"Pages-About"}
        compInd="5"
      />
    </div>
  );
}
