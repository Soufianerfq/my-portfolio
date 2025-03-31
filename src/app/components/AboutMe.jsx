import Image from "next/image";
import develop from "./../../../public/Develop.png"
import maintenance from "./../../../public/Maintenance.png"

export default function AboutMe(){
    return (
      <div className="max-w-[2000px] h-full mx-auto px-[30px]">
        <div className=" ">
          <h2 className=" border-8 w-fit m-auto font-mono font-bold lg:text-[40px] text-[30px] lg:py-3 pt-3 pb-3 lg:px-[40px] pr-[40px] pl-[40px] tracking-[7px]">
            About Me
          </h2>
        </div>
        <div className="lg:w-[760px] m-auto text-[#909090] mt-[50px]">
          <p className="text-center">
            I'm a self-taught developer with a deep passion for technology and programming. I love building intuitive and efficient web applications, constantly exploring new tools and frameworks to push the limits of what’s possible. Driven by curiosity and problem-solving, I’m always eager to learn, create, and innovate.
          </p>
        </div>
        <div className="lg:w-[80%]  lg:mt-[80px] m-auto flex md:flex-row flex-col mt-[50px] justify-between items-center lg:justify-around">
          <section className="lg:w-[40%] mx-[10px] md:mb-[0px] mb-[50px]">
            <Image className="inline lg:w-[150px] w-[100px]" src={develop} />
            <h2 className="inline font-mono font-bold lg:text-[30px] text-[25px]">
              DEVELOPMENT
            </h2>
            <p className="block font-light text-[15px] mt-3 lg:w-[400px] text-[#909090]">
              Based on a project created by me or another one, sent by you, I
              can program the website to be fully functional and responsive.
            </p>
          </section>
          <section className="lg:w-[40%] mx-[10px]">
            <Image className="inline lg:w-[150px]" src={maintenance} />
            <h2 className="inline font-mono font-bold lg:text-[30px] text-[25px]">
              MAINTENANCE
            </h2>
            <p className="block font-light text-[15px] mt-3 lg:w-[400px] text-[#909090]">
              In case of any problems or the need for changes, I can introduce
              new functionalities and solutions.
            </p>
          </section>
        </div>
      </div>
    );
}