"use client"
import { useState, useEffect, useRef } from "react"
import Hamburger from "hamburger-react";

export default function HamburgerComp({ aboutme, portfolio, skills }) {
    const navRef = useRef();
    const linkRef = useRef()
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (!navRef.current) return;
        if (isOpen) {
            navRef.current.style.height = "50vh";
            navRef.current.style.border = "6px solid white";
            linkRef.current.style.display = "flex";
        } else if (!isOpen) {
            navRef.current.style.height = "0";
            navRef.current.style.border = "0";
            linkRef.current.style.display = "none";
        }
    }, [isOpen])
    return (
        <nav>
            {/* <div className="flex items-center justify-end">
            <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          </div> */}
            <div ref={navRef} className="fixed transition-all  top-0 left-0 w-screen  text-white bg-black p-[3px]">
                <div className="flex items-center justify-end ">
                    <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
                </div>
                <nav ref={linkRef} className="flex flex-col items-center space-y-[50px]">
                    <button
                        
                        onClick={() =>
                            aboutme.current?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        About me
                    </button>
                    <button
                        
                        onClick={() =>
                            skills.current?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        Skills
                    </button>
                    <button
                        
                        onClick={() =>
                            portfolio.current?.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    >
                        Portfolio
                    </button>
                </nav>
            </div>
        </nav>
    );
}