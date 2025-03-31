"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import slots from "../../../public/slots.png"
import realestate from "../../../public/realestate.png"
import webagency from "../../../public/webagency.png"
import appointment from "../../../public/appointment.png"
import cabinet from "../../../public/cabinet.png"
import coinflip from "../../../public/coinflip.png"
import server from "../../../public/server.png"


export default function Projects(){
  const [page, setPage] = useState("Landing Pages")

  const lpRef = useRef(null);
  const reactRef = useRef(null);
  const beRef = useRef(null);

  useEffect(()=>{
    if(!lpRef || !reactRef || !beRef) return
    if (page === "Landing Pages"){
      reactRef.current.classList.add("hidden")
      lpRef.current.classList.remove("hidden")
      beRef.current.classList.add("hidden")    
    } else if (page === "React Applications" ){
      reactRef.current.classList.remove("hidden")
      lpRef.current.classList.add("hidden")
      beRef.current.classList.add("hidden")
    } else if (page === "Back-end"){
      reactRef.current.classList.add("hidden")
      lpRef.current.classList.add("hidden")
      beRef.current.classList.remove("hidden")    
    }
    

  },[page])

    return (
      <div className="max-w-[2000px] mx-auto ">
        <div className="lg:p-[80px] mb-[30px] mx-auto">
          <h2 className=" border-8 w-fit m-auto font-mono font-bold md:text-[40px] text-[30px] pt-3 pb-3 pr-[40px] pl-[40px] tracking-[7px] mx-auto ">
            PORTFOLIO
          </h2>
        </div>
        <div id="portfolio" className="flex flex-col mx-auto w-[100%] bg-[#1D1D1D] mb-[30px]">
          <div id="radio" className="flex justify-around md:w-[80%] w-full h-[130px] mx-auto items-center">
            <div className="w-full">
              <input type="radio" id="Landing-Pages" name="portfolio" value="Landing Pages"  onChange={(e) => setPage(e.target.value)} defaultChecked/>
              <label for="Landing-Pages">
                <h2 className="lg:text-[20px] text-[13px]">Landing Pages</h2>
              </label>
            </div>

            <div className="w-full">
              <input type="radio" id="React-Applications" name="portfolio" value="React Applications" onChange={(e) => setPage(e.target.value)} />
              <label for="React-Applications">
                <h2 className="lg:text-[20px] text-[13px]">Applications</h2>
              </label>
            </div>

            <div className="w-full">
              <input type="radio" id="Back-end" name="portfolio" value="Back-end" onChange={(e)=>setPage(e.target.value)} />
              <label for="Back-end">
                <h2 className="lg:text-[20px] text-[13px]">Back-end</h2>
              </label>
            </div>
          </div>
        </div>
        <div id="projects-pages" className="flex justify-center px-[30px]">

        {/* /////////////////////////////////////////////////////////////////////////////////// */}
          <div ref={lpRef} className="md:w-[80%] flex flex-col md:space-y-[100px] space-y-[50px] md:mt-[30px] md:mb-[30px]">

            <div id="webagency" className=" card flex lg:flex-row flex-col items-center ">
              <div className="lg:w-[500px]">
                <Image className="rounded-2xl" src={webagency}/>
              </div>
              <div className="lg:w-[600px] w-[100%] h-[70%] flex flex-col justify-around md:ml-[30px]">
                <h2 className="font-mono font-bold md:text-[40px] text-[25px] mb-[10px] ">Web Agency Landing Page</h2>
                <p className="text-[#909090] md:text-[17px]">A landing Page for a web agency, implementing flex box for the layout. The layout is responsive, it is tested with all different screen sizes</p>
                <div className="flex flex-col mt-[20px] lg:space-y-2">
                  <Link id="code" className="w-fit" href="https://github.com/Soufianerfq/web-agency" target="_blank" >View Code</Link>
                  <button className="button"><span><Link id="work" href="https://soufianerfq.github.io/web-agency/" target="_blank">View Work</Link></span></button>
                </div>
              </div>
            </div>

            <div id="realestate" className=" card flex lg:flex-row-reverse flex-col items-center mt-[30px] ">
              <div className="lg:w-[600px]">
                <Image className="rounded-2xl lg:ml-[30px]" src={realestate}/>
              </div>
              <div className="lg:w-[600px] w-[100%] h-[70%] flex flex-col justify-around md:mr-[30px]">
                <h2 className="font-mono font-bold md:text-[40px] text-[25px] mb-[10px] ">Real Estate Landing Page</h2>
                <p className="text-[#909090] md:text-[17px]">A landing Page for a Real Estate agency, also utilizes flexbox for a resposive design that is compatible with differents screensizes, also includes 2 custom made carrousels, auto scroll and click to scroll</p>
                <div className="flex flex-col mt-[20px] lg:space-y-2">
                  <Link id="code" className="w-fit" href="https://github.com/Soufianerfq/realestate-agency" target="_blank" >View Code</Link>
                  <button className="button"><span><Link id="work" href="https://soufianerfq.github.io/realestate-agency/" target="_blank">View Work</Link></span></button>
                </div>
              </div>
            </div>
           
          </div>

          {/* /////////////////////////////////////////////////////////////////////////////////// */}

          <div ref={reactRef} className="md:w-[80%] flex flex-col md:space-y-[100px] space-y-[50px] md:mt-[30px] md:mb-[30px]">

            <div id="Appointment" className=" card flex lg:flex-row flex-col mt-[30px]">
              <div className="lg:w-[600px]">
                <Image className="rounded-2xl" src={appointment} />
              </div>
              <div className="lg:w-[700px] w-[100%] h-[70%] flex flex-col justify-around lg:ml-[30px]">
                <h2 className="font-mono font-bold lg:text-[40px] text-[30px] ">Appointment Scheduler</h2>
                <p className="text-[#909090] lg:text-[17px]">A <span className="text-black font-bold">Full-Stack</span> application, it leverages the FullCalendar.js library alongside an Express/Node.js backend to provide a seamless scheduling experience and axios for server communication.</p>
                <h2 className="mt-[10px]">Key features</h2>
                <ul className="text-[#909090] lg:text-[13px]">
                  <li>-Effortless Scheduling – Book, reschedule, and cancel appointments with ease.</li>
                  <li>-Versatile Use Cases – Adaptable for various scenarios, though in this case, it's designed for medical cabinet management.</li>
                  <li>-Front-Desk Dashboard – Serving as the central hub for managing appointments efficiently.</li>
                </ul>
                <div className="flex flex-col mt-[20px] md:space-y-2">
                  <Link id="code" className="w-fit" href="https://github.com/Soufianerfq/appointment-scheduler" target="_blank" >View Code</Link>
                  <button className="button"><span><Link id="work" href="https://appointment-scheduler-kappa.vercel.app/" target="_blank">View Work</Link></span></button>
                </div>
              </div>
            </div>

            <div id="cabinet" className=" card flex lg:flex-row-reverse flex-col items-center mt-[30px] ">
              <div className="md:w-[600px]">
                <Image className="rounded-2xl" src={cabinet} />
              </div>
              <div className="lg:w-[700px] w-[100%] h-[70%] flex flex-col justify-around md:mr-[30px]">
                <h2 className="font-mono font-bold lg:text-[40px] text-[30px] ">Dr Interface</h2>
                <p className="text-[#909090] lg:text-[17px]">A <span className="text-black font-bold"> Full-Stack</span> This application is part of the project mentioned above. It includes protected routes that are restricted to doctors, implemented using custom hooks that verify user roles in combination with react-router-dom, zustand for state management and axios for server communication.
                </p>
                <h2 className="mt-[10px]">Key features</h2>
                <ul className="text-[#909090] lg:text-[13px]">
                  <li>-Role-Based Access – Only doctors can access sensitive areas.</li>
                  <li>-Secure Patient Records – Medical history is accessible only via a doctor’s login.</li>
                  <li>-Calendar Dashboard – Doctors have full access to a comprehensive scheduling system.</li>
                  <li>-JWT Authentication – Ensuring secure login and data protection.</li>
                </ul>
                <div className="flex flex-col mt-[20px] md:space-y-2">
                  <Link id="code" className="w-fit" href="https://github.com/Soufianerfq/appointment-scheduler" target="_blank" >View Code</Link>
                  <button className="button"><span><Link id="work" href="https://appointment-scheduler-kappa.vercel.app/login" target="_blank">View Work</Link></span></button>
                </div>
              </div>
            </div>

            <div id="coinflip" className=" card flex lg:flex-row flex-col items-center ">
              <div className="lg:w-[400px] w-[300px]">
                <Image className="rounded-2xl" src={coinflip} />
              </div>
              <div className="lg:w-[600px] w-[100%] h-[70%] flex flex-col justify-around md:ml-[30px]">
                <h2 className="font-mono font-bold md:text-[40px] text-[25px] mb-[10px] ">Coin Flip</h2>
                <p className="text-[#909090] md:text-[17px]">Courtesy of Ridotto.io, this is an identical replica, build with TS and zustand for state management featuring fully random 50/50 odds, there is a JS version that will have complete web3 integration for a play to earn experience</p>
                <div className="flex flex-col mt-[20px] lg:space-y-2">
                  <Link id="code" className="w-fit" href="https://github.com/Soufianerfq/casino/tree/master/src/app/(games)/coin-flip" target="_blank" >View Code</Link>
                  <button className="button"><span><Link id="work" href="https://soufianerfq.github.io/casino/coin-flip" target="_blank">View Work</Link></span></button>
                </div>
              </div>
            </div>

            <div id="slots" className=" card flex lg:flex-row-reverse flex-col items-center mt-[30px] ">
              <div className="lg:w-[500px] w-[300px]">
                <Image className="rounded-2xl" src={slots} />
              </div>
              <div className="lg:w-[600px] w-[100%] h-[70%] flex flex-col justify-around md:mr-[30px]">
                <h2 className="font-mono font-bold md:text-[40px] text-[25px] mb-[10px] ">Slots</h2>
                <p className="text-[#909090] lg:text-[17px]">Similar to Coinflip, built with TS and zustand for state management, this game features complete randomness, a key is provided to show the different winning combinations with the associated multipliers </p>
                <div className="flex flex-col mt-[20px] lg:space-y-2">
                  <Link id="code" className="w-fit" href="https://github.com/Soufianerfq/casino/tree/master/src/app/(games)/slots" target="_blank" >View Code</Link>
                  <button className="button"><span><Link id="work" href="https://soufianerfq.github.io/casino/slots" target="_blank">View Work</Link></span></button>
                </div>
              </div>
            </div>
          </div>

          
          {/* /////////////////////////////////////////////////////////////////////////////////// */}

          <div ref={beRef} className="md:w-[80%] flex flex-col md:space-y-[100px] md:mt-[30px] md:mb-[30px]">
            <div id="appointmentserver" className=" card flex lg:flex-row flex-col  mt-[30px]">
              <div className="md:w-[400px]">
                <Image className="rounded-2xl" src={server} />
              </div>
              <div className="lg:w-[800px] w-[100%] h-[70%] flex flex-col justify-around md:ml-[40px]">
                <h2 className="font-mono font-bold md:text-[40px] text-[30px] ">Medical Cabinet Management Server</h2>
                <p className="text-[#909090] md:text-[17px]">This is a fully custom-built backend server, developed with Node.js, Express, and MongoDB.</p>
                <h2 className="mt-[10px]">Key features</h2>
                <ul className="text-[#909090] md:text-[13px]">
                  <li>-Secure Authentication – Passwords are encrypted for maximum security.</li>
                  <li>-User Management – Supports new user registration and role assignments.</li>
                  <li>-Role-Based Access Control – Restricts access to sensitive data, ensuring only authorized users can view patient medical history.</li>
                  <li>-Appointment Management – Seamless handling of scheduling, rescheduling, and cancellations.</li>
                </ul>
                <div className="flex flex-col mt-[20px] md:space-y-2">
                  <Link id="code" className="w-fit" href="https://github.com/Soufianerfq/appointment-api" target="_blank" >View Code</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}