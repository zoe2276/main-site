import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import * as Pages from "../pages";
import { GlitchingComponent } from "../components";

export function Layout() {
  const pages = Object.keys(Pages).map((e, ind) => {
    if (e !== "Home") {
      return (
        <Link key={`Link-${e}`} to={`/${e}`}>
          {/* {e.toLowerCase()} */}
          <GlitchingComponent parentName={`Link-${e}`} children={e.toLowerCase()} compInd={ind + 1} />
        </Link>
      )
    }
  });
  return (
    <>
      <div className="navbar">
        <nav className="navbarNav">
          <Link key={`Link-Home`} to="/">
            <GlitchingComponent parentName={`Link-Home`} children="home" compInd={0}/>
            </Link>
          {pages}
          </nav>
        <img src="https://i.giphy.com/media/WE066ErCk0Z91fLgaJ/giphy.webp" />
      </div>
      <Outlet />
    </>
  );
}
