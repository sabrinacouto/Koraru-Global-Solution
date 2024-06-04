import React from "react";
import { PiSecurityCameraFill } from "react-icons/pi";
import { AiFillAlert } from "react-icons/ai";
import { GiCoral } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { PiMicroscopeFill } from "react-icons/pi";

const ServicesContent = () => {
  return (
    <div className="bg-[#FCFCFC] font-montserrat py-4">
      <div className="flex flex-row items-center justify-center py-0 px-5 box-border text-left text-13xl text-darkslategray-100 font-montserrat">
        <div className=" flex flex-col items-center justify-center gap-[33px] max-w-full mq750:gap-[16px]">
          <div className="self-stretch flex flex-col md:flex-row items-start justify-center py-0 pr-5 pl-[22px]">
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold  text-center z-[1] mq750:text-7xl">
                SERVIÇOS
              </h2>
              <div className=" w-[4rem] border-b-4 border-lightcoral mb-7">
             </div>
            </div>
          </div>
          <h1 className=" text-inherit font-bold z-[1] mq450:text-lgi mq750:text-7xl">
            <span>Conheça os serviços da</span>
            <span className="text-lightcoral">{` Kōraru `}</span>
          </h1>
        </div>
      </div>

      <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-[6rem] text-center text-5xl text-white flex-wrap ">
      <div className="flex flex-col items-center justify-center  gap-10 ">
        <div className=" flex flex-row items-start justify-center py-0 px-5 box-border">
          <div className="h-[143px] w-[157px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumturquoise w-full h-full z-[1]" />
            <div className="flex items-center justify-center absolute w-[calc(100%_-_25px)] top-[33px] left-[13px] text-inherit font-medium font-inherit h-[89px] z-[2] mq450:text-lgi">
            <PiSecurityCameraFill className=" text-white text-15xl" />
            </div>
         
          </div>

        </div>
        <div className="flex flex-col items-center justify-center gap-[19px] h-[15rem] w-[20rem] md:w-auto lg:w-[22rem] text-darkslategray-200">
          <h3 className="m-0 self text-center font-bold font-inherit z-[1] mq450:text-lgi">
            Monitoramento Contínuo do Oceano
          </h3>
          <div className="flex flex-row items-center justify-center py-0 px-1 box-border max-w-full text-base text-black">
            <p>
              Oferecemos monitoramento contínuo dos recifes de coral,
              coletando dados sobre temperatura da água, qualidade, cobertura
              coralina, densidade de espécies e presença de doenças através de
              sensores subaquáticos.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 max-w-full">
        <div className=" flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[143px] w-[157px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumturquoise w-full h-full z-[1]" />
            <div className="flex items-center justify-center absolute w-[calc(100%_-_25px)] top-[33px] left-[13px] text-inherit font-medium font-inherit h-[89px] z-[2] mq450:text-lgi">
            <AiFillAlert className=" text-white text-15xl" />
            </div>
         
          </div>
       

        </div>
        <div className="flex flex-col items-center justify-center gap-[19px] h-[15rem] w-[20rem] md:w-auto lg:w-[22rem]  text-darkslategray-200">
          <h3 className="m-0 text-center font-bold font-inherit z-[1] mq450:text-lgi">
          Identificação de Ameaças e Fatores de Estresse
          </h3>
          <div className="flex flex-row items-center justify-center py-0 px-1 box-border  text-base text-black">
            <p>
            Identificamos ameaças e fatores de estresse, como aumento da temperatura, poluição, pesca predatória e desenvolvimento costeiro, priorizando ações de conservação e medidas preventivas.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 max-w-full">
        <div className=" flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[143px] w-[157px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumturquoise w-full h-full z-[1]" />
            <div className="flex items-center justify-center absolute w-[calc(100%_-_25px)] top-[33px] left-[13px] text-inherit font-medium font-inherit h-[89px] z-[2] mq450:text-lgi">
            <GiCoral className=" text-white text-15xl" />
            </div>
         
          </div>
       

        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[19px] h-[15rem] w-[20rem] md:w-auto lg:w-[22rem]  text-darkslategray-200">
          <h3 className="m-0 text-inherit font-bold font-inherit z-[1] mq450:text-lgi">
          Restauração e Manejo Ativo
          </h3>
          <div className="flex flex-row items-center justify-center py-0 px-1 box-border  text-base text-black">
            <p>
            Realizamos restauração e manejo ativo, incluindo cultivo e replantio de corais, remoção de espécies invasoras e criação de áreas marinhas protegidas, utilizando técnicas inovadoras como corais artificiais impressos em 3D.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 max-w-full">
        <div className=" flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[143px] w-[157px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumturquoise w-full h-full z-[1]" />
            <div className="flex items-center justify-center absolute w-[calc(100%_-_25px)] top-[33px] left-[13px] text-inherit font-medium font-inherit h-[89px] z-[2] mq450:text-lgi">
            <IoBookSharp className=" text-white text-15xl" />
            </div>
         
          </div>
       

        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[19px] h-[15rem] w-[20rem] md:w-auto lg:w-[22rem]  text-darkslategray-200">
          <h3 className="m-0 text-inherit font-bold font-inherit z-[1] mq450:text-lgi">
          Promoção da Conservação e Educação 
          </h3>
          <div className="flex flex-row items-center justify-center py-0 px-1 box-border  text-base text-black">
            <p>
            Promovemos a conservação e educação pública, conscientizando sobre a importância dos oceanos e práticas sustentáveis através de recursos educativos em nosso site. Engajamos comunidades e ONGs com campanhas de conscientização e diretrizes práticas para hábitos sustentáveis.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 max-w-full">
        <div className=" flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="h-[143px] w-[157px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumturquoise w-full h-full z-[1]" />
            <div className="flex items-center justify-center absolute w-[calc(100%_-_25px)] top-[33px] left-[13px] text-inherit font-medium font-inherit h-[89px] z-[2] mq450:text-lgi">
            <PiMicroscopeFill className=" text-white text-15xl" />
            </div>
         
          </div>
       

        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[19px] h-[15rem] w-[20rem] md:w-auto lg:w-[22rem]  text-darkslategray-200">
          <h3 className="m-0 text-inherit font-bold font-inherit z-[1] mq450:text-lgi">
          Pesquisa e Inovação Contínuas
          </h3>
          <div className="flex flex-row items-center justify-center py-0 px-1 box-border  text-base text-black">
            <p>
           Envolvemos técnicos e pesquisadores em pesquisa e inovação contínuas, registrando e analisando dados em tempo real com sensores IoT para manter a qualidade da água, criando um ambiente colaborativo para resposta coordenada e eficaz.
            </p>
          </div>
        </div>
      </div>

      
    </div>
    </div>
  );
};

export default ServicesContent;
