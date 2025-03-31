import Image from "next/image";
import me from "../../../../public/me.png"
import Link from "next/link";

export default function Mobile(){
    return(
        <>
            <div id='mobile' className=" flex w-[100%]  flex-col md:flex-row justify-around items-center md:pt-[70px] pt-[50px] px-[30px]">
                <Image className="rounded-[50%] w-[300px]  " src={me}/>
                <div className="lg:w-[40%]  ">
                    <h2 className="mb-[30px] font-semibold text-[35px] font-mono">
                        Hi, I am
                    </h2>
                    <h1 className="font-bold md:text-[50px] text-[30px] font-mono w-fit mr-[10px]">Soufiane Rafiq</h1>
                    <h3 className="text-[#909090] font-semibold  md:text-[20px] text-[18px] w-fit mr-[50px] mb-[10px]">
                        Front-End Web Developer
                    </h3>
                    <button id="cv" > <Link href="https://drive.google.com/file/d/11CQ1nl3MBUh3RH4DWbo1zbagJRexxNXm/view?usp=sharing" target="_blank"> Resume </Link></button>
                </div>
                
            </div>
            <div className="w-full bg-[#1D1D1D] text-[#D7D7D7] flex justify-baseline mt-7">
                <p className="w-[80%] mx-auto text-center italic mt-[20px] mb-[20px]">"And so you touch this limit, something happens and you suddenly can go a little bit further. With your mind power, your determination, your instinct, and the experience as well, you can fly very high" <span className="text-[15px] ">Ayton Senna</span></p>
            </div>
        </>
    )
}