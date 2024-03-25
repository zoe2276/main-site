import "./styles.css";
import * as React from "react";
import * as Pages from "./pages";
import { Layout } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [homePage, setHomePage] = React.useState(false);
  // if (window.location.href === "") {
  //   setHomePage(true);
  // } else {
  //   setHomePage(false);
  // }
  const fakeIp = () => {
    const ipArray = [1, 2, 3, 4].map(() => Math.floor(Math.random() * 256));
    alert(
      `Thanks for your IP!\nIt has been added to our databases.\nYour IP: ${ipArray.join(
        "."
      )}`
    );
  };

  React.useEffect(() => {
    if (Math.floor(Math.random() * 16) === 0) {
      fakeIp();
    }
  }, []);

  const routes = Object.keys(Pages)
    .map((e) => {
      const page = React.createElement(Pages[e]);
      return <Route path={e.toLowerCase()} element={page} />;
    })
    .filter((e) => e);

  // let navbar;
  // React.useEffect(() => {
  //   navbar === <Pages.Layout />;
  // }, [homePage]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout homePage={homePage} />}>
            <Route index element={<Pages.Home />} />
            {routes}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
