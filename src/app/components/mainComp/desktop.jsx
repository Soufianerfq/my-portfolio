import me from "../../../../public/me.png"
import Image from "next/image";
import Link from "next/link";

export default function Desktop(){
    return(
        <>
            <div className=" w-[100%] h-[100%] bg-black overflow-hidden flex justify-between">
                <div className="lg:w-[50%] h-[100%] lg:h-[150%] inline-block bg-[#D7D7D7] rotate-9 relative bottom-30 lg:left-[-8%] ">

                </div>
                <div className=" xl:w-[95%] w-[92.5%] lg:mt-[60px] flex absolute left-[80px] top-[50px] justify-center items-center">
                    <div className="lg:w-[40%] lg:h-[400px] h-[100px]">
                        <h2 className="mb-[50px] font-semibold text-[35px] font-mono">
                            Hi, I am
                        </h2>
                        <h1 className="font-bold lg:text-[70px] text-[50px] font-mono w-fit mr-[10px]">Soufiane Rafiq</h1>
                        <h3 className="text-[#909090] font-semibold  lg:text-[30px] text-[25px] w-fit mr-[50px]">
                            Front-End Web Developer
                        </h3>
                        <button id="cv"> <Link href="https://drive.google.com/file/d/11CQ1nl3MBUh3RH4DWbo1zbagJRexxNXm/view?usp=sharing" target="_blank"> Resume </Link></button>
                    </div>
                    <div className="w-[60%] flex justify-center">
                        <Image className=" lg:w-[500px] lg:h-[500px] w-[200px] h-[200px] rounded-[50%]" src={me} />
                    </div>
                </div>
            </div>
            <div className=" w-[100%] h-[15%] bg-[#1D1D1D] text-[#D7D7D7] relative bottom-29 text-[20px] flex justify-baseline">
                <p className="w-[60%] mx-auto text-center my-auto italic">"And so you touch this limit, something happens and you suddenly can go a little bit further. With your mind power, your determination, your instinct, and the experience as well, you can fly very high" <span className="text-[15px] ">Ayton Senna</span></p>
            </div>
        </>
    )
}