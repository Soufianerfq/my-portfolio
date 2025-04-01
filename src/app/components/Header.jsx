"use client"
import { useState, useEffect, useLayoutEffect } from "react"
import Nav from "./nav/Nav"
import HamburgerComp from "./nav/HamburgerComp"

export default function Header({aboutme, portfolio, skills}){
  const [small, setSmall] = useState()

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 928) {
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
      <div className="max-w-[2000px] mx-auto flex  text-white">
        <div className=" flex justify-end text-white md:absolute h-[50px] w-full bg-black ">

          {
            !small ?(
              <Nav 
              aboutme = {aboutme}
              skills = {skills}
              portfolio = {portfolio}
              />
            ):(
              <HamburgerComp
                  aboutme={aboutme}
                  skills={skills}
                  portfolio={portfolio}
              />
            )
          }
        </div>
      </div>

    );
}