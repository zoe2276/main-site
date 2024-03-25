import * as React from "react";

export function Loading({ random = false }) {
  const theta = React.useRef(0);
  const currentX = React.useRef(0);
  const currentY = React.useRef(0);
  const activeColor = React.useRef(true);
  const coef = React.useRef(
    random
      ? Math.ceil((Math.random() * (50 - 0.01) + 0.01) * 100) / 100
      : 10.04,
  );
  //17.59 34.06 28.77 23.42 37.4 22.31
  const firstRender = React.useRef(true);
  const [derendered, setDerendered] = React.useState(false);

  React.useEffect(() => {
    const canvasColorInterval = setInterval(() => {
      activeColor.current = !activeColor.current;
      if (!derendered) {
        if (firstRender.current) {
          firstRender.current = false;
        } else {
          const canvas = document.getElementById("loading");
          if (canvas) {
            const context = canvas.getContext("2d");
            let strokeColor;
            if (activeColor.current) {
              strokeColor = "#95c0c4";
            } else {
              strokeColor = "#b195c4";
            }

            context.font = "20px Courier New";
            context.textAlign = "center";
            context.fillStyle = strokeColor;
            context.fillText(coef.current, canvas.width / 2, canvas.height / 2);
          } else {
            setDerendered(true);
          }
        }
      }
    }, 1000);
    return () => clearInterval(canvasColorInterval);
  }, []);

  React.useEffect(() => {
    const canvasClearInterval = setInterval(() => {
      if (!derendered) {
        const canvas = document.getElementById("loading");
        if (canvas) {
          canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    }, 5000);
    return () => clearInterval(canvasClearInterval);
  });

  const beginAnimation = () => {
    window.requestAnimationFrame(draw);
  };

  const draw = () => {
    const canvas = document.getElementById("loading");
    if (canvas) {
      const context = canvas.getContext("2d");
      let strokeColor;
      if (activeColor.current) {
        strokeColor = "#b195c4";
      } else {
        strokeColor = "#95c0c4";
      }

      drawSpirograph(
        canvas,
        context,
        strokeColor,
        canvas.width / 2,
        canvas.height / 2,
        90,
        30,
        6,
        theta.current,
      );
    } else {
      console.error("line 84");
      setDerendered(true);
    }
  };

  const drawSpirograph = (
    canvas,
    context,
    strokeColor,
    cx,
    cy,
    radius1,
    radius2,
    ratio,
    localTheta,
  ) => {
    context.beginPath();
    const localCurrentX =
      currentX.current == 0 ? canvas.width / 2 : currentX.current;
    const localCurrentY =
      currentY.current == 0 ? canvas.height / 2 : currentY.current;
    context.moveTo(localCurrentX + 120, localCurrentY);
    const x =
      cx +
      radius1 * Math.cos(localTheta) +
      radius2 * Math.cos(localTheta * ratio);
    const y =
      cy +
      radius1 * Math.sin(localTheta) +
      radius2 * Math.sin(localTheta * ratio);
    context.lineTo(x, y);
    currentX.current = x - 120;
    currentY.current = y;
    context.shadowColor = "black";
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowBlur = 8;
    context.strokeStyle = strokeColor;
    context.lineWidth = 2;
    context.stroke();
    setTimeout(() => {
      theta.current = theta.current + coef.current;
    }, 10);
    if (!derendered) {
      beginAnimation();
    }
  };
  if (!derendered) {
    beginAnimation();
  }
  /*
  React.useMemo(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      const canvas = document.getElementById("loading");
      if (canvas) {
        const context = canvas.getContext("2d");
        // context.clearRect(0, 0, canvas.width, canvas.height);
        let strokeColor;
        if (activeColor.current) {
          strokeColor = "#1a0920";
        } else {
          strokeColor = "#b195c4";
        }

        context.font = "20px Courier New";
        context.textAlign = "center";
        context.fillStyle = strokeColor;
        context.fillText(coef.current, canvas.width / 2, canvas.height / 2);
      } else {
        // const canvas = document.getElementById("loading");
        // canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        derendered = true;
      }
    }
  }, [activeColor]);
*/
  return (
    <>
      <canvas
        id="loading"
        width="450px"
        height="300px"
        onClick={() => {
          // const canvas = document.getElementById("loading");
          // canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        }}
      />
    </>
  );
}
