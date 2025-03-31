import github from "../../../public/github.png"
import telegram from "../../../public/telegram.png"
import linkedin from "../../../public/linkedin.png"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return (
        <div className=" max-w-[2000px] mx-auto h-full bg-[#1D1D1D] text-white flex flex-col justify-center items-center space-y-[30px] py-[40px]">
            <h2 className="md:text-[50px] text-[40px] font-thin text-[#909090]">Get <span className="font-bold text-white">In Touch</span></h2>
            <h2 className="md:text-[40px] text-[30px]">Let's Work Together</h2>
            <div id="socials" className="flex space-x-5">
                <Link href="https://www.linkedin.com/in/soufiane-rafiq-a7b275203/" target="_blank">
                    <Image alt="linkedin" src={linkedin}/>
                </Link>
                <Link href="https://github.com/Soufianerfq" target="_blank">
                    <Image alt="github" src={github}/>
                </Link>
                <Link href="https://t.me/rsoufiane" target="_blank">
                    <Image alt="telegram" src={telegram}/>
                </Link>
            </div>
            <h3 className="text-center">A special thanks to Yaroslav Baiduk and Mohammed Marragh </h3>
        </div>
    )
}