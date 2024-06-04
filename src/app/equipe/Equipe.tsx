import Image from "next/image";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import Juliana from "../../../public/assets/Juliana.png"
import Kevin from "../../../public/assets/Kevin.png"
import Sabrina from "../../../public/assets/Sabrina.png"


const Equipe = () =>{
    return(
        <>
         <div className="flex flex-col items-center justify-center mb-9">
              <h2 className="font-bold text-center text-darkslategray-100  z-[1] text-5xl">
                Conheça nossa Equipe
              </h2>
              <div className=" w-[4rem] border-b-4 border-lightcoral mb-7"/>
              </div>
        <div className="flex justify-center flex-wrap flex-col md:flex-row items-center gap-10 md:gap-[11rem]"> 
            <div className=" flex flex-col justify-center items-center gap-2 border-2  rounded-3xl  border-mediumturquoise h-[30rem] w-[20rem]">
                <Image src= {Juliana} alt = "Desenvolvedora do site. Uma mulher de olhos e cabelos castanhos" />
                <h2 className="text-darkslategray-100 font-bold">Juliana Moreira</h2>
                <p className="text-lightcoral font-bold">RM: 554113</p>
                <p className="text-darkslategray-100 font-bold text-center">Desenvolvedora Back-End Java</p>
                <div className="flex gap-[3rem] mt-7">
                <FaSquareGithub className="w-[2.5rem] h-[2.5rem] text-darkslategray-100 hover:text-lightcoral cursor-pointer"/>
                <IoLogoLinkedin className="w-[2.5rem] h-[2.5rem] text-darkslategray-100 hover:text-lightcoral cursor-pointer" />
                </div>     
            </div>
           
            <div className="flex flex-col justify-center items-center gap-2 border-2 rounded-3xl border-mediumturquoise h-[30rem] w-[20rem]">
            <Image src= {Kevin} alt = "Desenvolvedora do site. Uma mulher de olhos e cabelos castanhos" />
                <h2 className="text-darkslategray-100 font-bold">Kevin Nobre</h2>
                <p className="text-lightcoral font-bold">RM: 552590</p>
                <p className="text-darkslategray-100 font-bold text-center">Desenvolvedor Back-End Python</p>
                <div className="flex gap-[3rem] mt-7">
                <FaSquareGithub className="w-[2.5rem] h-[2.5rem] text-darkslategray-100 hover:text-lightcoral cursor-pointer"/>
                <IoLogoLinkedin className="w-[2.5rem] h-[2.5rem] text-darkslategray-100 hover:text-lightcoral cursor-pointer" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 border-2 rounded-3xl border-mediumturquoise h-[30rem] w-[20rem]">
             <Image src= {Sabrina} alt = "Desenvolvedora do site. Uma mulher de olhos e cabelos castanhos" />
                <h2 className="text-darkslategray-100 font-bold">Sabrina Couto</h2>
                <p className="text-lightcoral font-bold">RM: 552728</p>
                <p className="text-darkslategray-100 font-bold text-center">Desenvolvedora Front-End</p>
                <div className="flex gap-[3rem] mt-7">
                <FaSquareGithub className="w-[2.5rem] h-[2.5rem] text-darkslategray-100 hover:text-lightcoral cursor-pointer"/>
                <IoLogoLinkedin className="w-[2.5rem] h-[2.5rem] text-darkslategray-100 hover:text-lightcoral cursor-pointer" />
                </div>     
            </div>    
        </div>
        </>
    )
}

export default Equipe;