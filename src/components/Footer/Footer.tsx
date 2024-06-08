import logo from "../../../public/assets/logobranca.png"
import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";


const Footer = () =>{
    return(
        <footer className="box-footer bg-darkslategray-100 mt-10">
        <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 gap-10 lg:gap-[20rem] lg:grid-cols-3">
            <div className="">
            <div className="w-[9.375rem] flex flex-row items-start justify-start relative">
            <h1 className="ml-5 flex-1 relative text-white font-bold text-5xl">
              ŌRARU
            </h1>
                <Image
                className="absolute pl-10 !m-[0] top-[-6px] left-[-53px] object-cover z-[1]"
                alt="Logo da Koraru"
                src={logo}
              />
              </div>
              <div className="flex mt-5 space-x-4 text-gray-600">
                <a className="hover:opacity-75" href="https://www.linkedin.com/school/fiap/posts/?feedView=all" target="_blank" rel="noreferrer"  title="Linkedin">
                  <IoLogoLinkedin className="text-white text-7xl" />
                </a>
                <a className="hover:opacity-75" href="https://www.instagram.com/fiapoficial/" target="_blank" rel="noreferrer" title="Instagram">
                 <FaSquareInstagram  className="text-white text-7xl" />
                </a>
                <a className="hover:opacity-75" href="https://github.com/sabrinacouto/Koraru-Global-Solution" target="_blank" rel="noreferrer" title="Link do Repositório Github">
                 <FaGithubSquare  className="text-white text-7xl" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-[3rem] lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
          
              <div>
                <p className="font-bold text-white">
                 Conheça outras iniciativas
                </p>
                <nav className="flex flex-col mt-4 text-white">
                  <ul className="space-y-2 ">
                    <li> <a className="hover:opacity-75" href="https://voiceoftheoceans.com/"  target="_blank" rel="noreferrer"> Vozes do Oceano </a></li>
                    <li><a className="hover:opacity-75" href="https://oceanhero.today/pt"  target="_blank" rel="noreferrer"> Ocean Hero</a></li>
                    <li><a className="hover:opacity-75" href="https://brasil.oceana.org/"  target="_blank" rel="noreferrer" > Oceana Brasil </a></li>
                    <li><a className="hover:opacity-75" href="https://oceanfdn.org/pt/projetos/"  target="_blank" rel="noreferrer"> The Ocean Foundation </a></li>
                  </ul>
                </nav>
              </div>
              <div>
                <p className="font-bold text-white">
                 Equipe
                </p>
                <nav className="flex flex-col mt-4  text-white">
                 <ul className="space-y-2">
                  <li className="hover:opacity-75">Juliana Moreira da Silva - RM 554113</li>
                  <li className="hover:opacity-75">Kevin Christian Nobre - RM 552590</li>
                  <li className="hover:opacity-75">Sabrina do Couto X. Lima - RM 552728</li>
                 </ul>
                  
                </nav>
              </div>
              <div>
                <p className="font-bold text-white">
                Links
                </p>
                <nav className="flex flex-col mt-4 text-white">
                <ul className="space-y-2">
                  <li className="hover:opacity-75"><Link href="/#sobre-nos"> Sobre nós </Link></li>
                  <li className="hover:opacity-75"><Link href="/#servicos"> Serviços </Link></li>
                  <li className="hover:opacity-75"><Link href="/#nossa-missao"> Nossa missão</Link></li>
                  <li className="hover:opacity-75"><Link href="/#equipe"> Equipe</Link></li>
                 </ul>
                </nav>
              </div>
            </div>
          </div>
          <h4 className="text-white w-[19rem]">
          © { new Date().getFullYear()} - 
           <b> Kōraru </b> - Todos os direitos reservados
          </h4>
        </div>
      </footer>

    )
}

export default Footer;