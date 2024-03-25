import * as React from "react";

export function GlitchingComponent({
  children,
  href = "",
  parentName,
  compInd = "",
}) {
  const [glitching, setGlitching] = React.useState(0),
    [content, setContent] = React.useState(null),
    glitchInterv = React.useRef((Math.floor(Math.random() * (11 - 6) + 6)))
    
  const generateApplicationChars = (characters = 2) => {
    let output = [];
    for (let i = 0; i < characters; i++) {
      output.push((Math.random() * (36 - 10) + 10).toString(36));
    }
    return output.map((e) => {
      return new RegExp(e, "i");
    });
  };

  const generateNewBody = () => {
    const mainContent = children;
    const mainContentArray = mainContent.split(" ");
    const minLength = 3;
    let newBody;
    if (mainContentArray.length > minLength) {
      const regExps =
        mainContentArray < 30
          ? generateApplicationChars(10)
          : generateApplicationChars();
      newBody = mainContentArray.map((e, ind) => {
        if (regExps.some((rexp) => rexp.test(e))) {
          return (
            <>
              <span
                className={`toGlitch glitching-0`}
                key={`glitch-${ind}`}
                id={`${parentName}-glitch-${ind}`}
              >
                {e}
              </span>{" "}
            </>
          );
        } else {
          return e + " ";
        }
      });
    } else {
      // glitchInterv.current = ((Math.random() * (6 - 4) + 4));
      // console.debug(glitchInterv);
      newBody = mainContentArray.map((e, ind) => {
        return (
          <span
            className={`toGlitch-${compInd} glitching-0`}
            key={`glitch-${ind}`}
            id={`${parentName}_${compInd}-glitch-${ind}`}
          >
            {e + " "}
          </span>
        );
      });
    }

    if (href === "") {
      return newBody;
    } else {
      return <a href={href}>{newBody}</a>;
    }
  };

  const glitchController = () => {
    setGlitching(1);
    setTimeout(() => {
      setGlitching(2);
    }, 133);
    setTimeout(() => {
      setGlitching(3);
    }, 390);
    setTimeout(() => {
      setGlitching(1);
    }, 480);
    setTimeout(() => {
      setGlitching(2);
    }, 540);
    setTimeout(() => {
      setGlitching(1);
    }, 670);
    setTimeout(() => {
      setGlitching(2);
    }, 730);
    setTimeout(() => {
      setGlitching(3);
    }, 840);
    setTimeout(() => {
      setGlitching(0);
    }, 1000);
  };

  React.useMemo(() => {
    const newBody = generateNewBody();
    setContent(newBody);
    setInterval(() => {
      glitchController();
    }, Math.trunc(glitchInterv.current * 1000));
  }, []);

  React.useMemo(() => {
    // console.debug("Effect has been triggered.");
    let targets = Object.values(document.getElementsByClassName(`toGlitch-${compInd}`));
    targets.forEach((e) => {
      document
        .getElementById(e.id)
        .classList.remove(
          "glitching-0",
          "glitching-1",
          "glitching-2",
          "glitching-3"
        );
      document.getElementById(e.id).classList.add(`glitching-${glitching}`);
    });
  }, [glitching]);

  return (
    <span
      className={`content${
        compInd == "" ? "" : " " + parentName + "-glitchingcomponent-" + compInd
      }`}
      onClick={() => {
        glitchController();
      }}
    >
      {content}
    </span>
  );
}
