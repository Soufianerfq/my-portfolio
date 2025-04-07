import Image from "next/image"
import html from "../../../public/HTML.png"
import css from "../../../public/css.png"
import react from "../../../public/React.png"
import next from "../../../public/Next.png"
import js from "../../../public/JS.png"
import ts from "../../../public/TS.png"
import mongo from "../../../public/mongo.png"
import tailwind from "../../../public/tailwind.png"
import node from "../../../public/node.png"
import express from "../../../public/express.png"
import matter from "../../../public/matter.png"
import web3 from "../../../public/web3.png"
import axios from "../../../public/axios.png";
import zustand from "../../../public/zustand.png";


export default function Skills(){
    return (
      <div className="max-w-[2000px] px-[30px] mx-auto">
        <div className="lg:p-[30px] mb-[30px]">
          <h2 className=" border-8 w-fit m-auto font-mono font-bold text-[40px] pt-3 pb-3 pr-[40px] pl-[40px] tracking-[7px]">
            Skills
          </h2>
        </div>
        <div>
          <section className="mb-[60px]">
            <h2 className="text-center font-bold font-mono text-[30px] lg:mr-[430px] mb-[30px]">
              Using Now:
            </h2>

            <div className="m-auto w-fit flex flex-col lg:space-y-[50px] space-y-[40px]">
              <div className="flex lg:space-x-[70px] space-x-[30px]">
                <section className="">
                  <Image alt="html" className="img" src={html} />
                </section>
                <section>
                  <Image alt="css" className="img" src={css} />
                </section>
                <section>
                  <Image alt="js" className="img ml-[5px]" src={js} />
                </section>
                <section>
                  <Image alt="ts" className="img" src={ts} />
                </section>
                <section>
                  <Image alt="react" className="img " src={react} />
                </section>
              </div>
              <div className="flex lg:space-x-[70px] space-x-[30px]">
                <section>
                  <Image alt="next" className="img" src={next} />
                </section>
                <section>
                  <Image alt="tailwind" className="img" src={tailwind} />
                </section>
                <section>
                  <Image alt="node" className="img" src={node} />
                </section>
                <section className="ml-[15px]">
                  <Image alt="express" className="img" src={express} />
                </section>
                <section className="w-[30px] ">
                  <Image alt="mongo" className="img ml-[10px]" src={mongo} />
                </section>
              </div>
            </div>
          </section>
          <section className="m-auto w-fit flex flex-col mb-[50px]">
            <h2 className="text-center font-bold font-mono text-[30px] lg:mr-[430px] mb-[30px]">
              Libraries:
            </h2>
            <div className="flex lg:space-x-[40px] space-x-[20px]">
              <section className=" ">
                <Image alt="zustand" className=" lg:w-[70px] w-[60px]" src={zustand} />
              </section>
              <section className="lg:w-[70px] w-[60px]">
                <Image alt="axios" className="" src={axios} />
              </section>
              <section className="lg:w-[110px] w-[80px]">
                <Image alt="matter" className="" src={matter} />
              </section>
              <section className="lg:w-[70px] w-[60px]">
                <Image alt="web3" className="" src={web3} />
              </section>
            </div>
          </section>
        </div>
      </div>
    );
}