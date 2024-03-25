import * as React from "react";
import { GlitchingComponent, Loading } from "../components";

export function Random() {
  const [loading, setLoading] = React.useState(true);
  const [title, setTitle] = React.useState();
  const [body, setBody] = React.useState();
  React.useEffect(() => {
    const getRandomArticleId = async () => {
      let url = "https://en.wikipedia.org/w/api.php";
      const params = new URLSearchParams({
        origin: "*",
        action: "query",
        format: "json",
        list: "random",
        rnlimit: "1",
      });
      url = `${url}?${params}`;
      const response = await fetch(url);
      return response.json();
    };
    const articleIdPromise = getRandomArticleId()
      .then((res) => {
        return res.query.random[0].id;
      })
      .catch((err) => {
        return err;
      });

    const getArticleById = async (id) => {
      let url = `https://en.wikipedia.org/w/api.php?origin=*&action=parse&format=json&pageid=${id}&formatversion=2`;
      const response = await fetch(url);
      return response.json();
    };
    articleIdPromise.then((res1) => {
      const articlePromise = getArticleById(res1)
      .then((res) => {
        return [res.parse.title, res.parse.text];
      })
      .catch((err) => {
        console.debug(err);
        return err;
      });
      articlePromise.then((res) => {
        setTitle(res[0]);
        setBody(res[1]);
        setLoading(false);
      });
    });

  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
        <GlitchingComponent parentName="Random" children={title} />
        <br />
        <br />
        {new DOMParser().parseFromString(body, "text/html").body.textContent || ""}
        </>
      )}
    </>
  );
}
