"use client"
import Desktop from "./mainComp/desktop";
import Mobile from "./mainComp/mobile";
import { useState, useEffect, useLayoutEffect } from "react";

export default function Landing(){
  const [small, setSmall] = useState(null)

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1023) {
        setSmall(true)
      } else {
        setSmall(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

    return (
      <div className="max-w-[2000px] h-full mx-auto">

          {!small?(
              <Desktop />
          ): (
                <Mobile />
          )}
        </div>
    );
}