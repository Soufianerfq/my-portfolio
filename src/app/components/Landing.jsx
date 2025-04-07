"use client"
import Desktop from "./mainComp/desktop";
import Mobile from "./mainComp/mobile";
import { useState, useEffect, useLayoutEffect } from "react";

export default function Landing(){
  const [small, setSmall] = useState(window.innerWidth)

  useLayoutEffect(() => {
    const handleResize = () => {
      setSmall(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])


    return (
      <div className="max-w-[2000px] h-full mx-auto">

        {
          small > 1023 ? (
            <Desktop />
          ) : (
            <Mobile />
          )
        }
        </div>
    );
}

