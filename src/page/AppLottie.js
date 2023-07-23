import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../lottie/login.json";

function AppLottie() {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
      speed: 1.5,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      }
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div ref={containerRef}></div>
  );
}

export default AppLottie;