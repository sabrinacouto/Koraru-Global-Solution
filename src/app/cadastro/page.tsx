import React from "react";
import Image from "next/image";
import FormSignUp from "@/components/FormSignUp/FormSignUp";
import logo from "../../../public/assets/logo.png";


const Cadastro = () => {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center font-montserrat mt-10 gap-10 p-4">
      <div className=" w-auto md:w-[38rem] flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start py-0 px-[30px] box-border">
          <div className="w-[9.375rem] flex flex-row items-start justify-start relative mb-9">
            <h1 className="flex-1 relative ml-1 font-bold  text-darkslategray-200 text-[2rem]">
              ŌRARU
            </h1>
                <Image
                className="h-[4rem] w-[4rem] absolute !m-[0] top-[-9px] left-[-48px] object-cover z-[1]"
                alt="Logo da Koraru"
                src={logo}
              />
          </div>
          </div>
          <div className=" text-5xl text-black">
            <h2 className="m-0 text-lightcoral font-bold w-auto md:w-[30rem]">
                Ao se cadastrar na Kōraru, sua empresa terá:
            </h2>
          </div>
          <div className=" flex flex-col gap-6 mt-5">
            <div className="">
            <p>
            <span className="font-bold text-darkslategray-200 mr-1">
            Monitoramento em Tempo Real:     
            </span>
             Sensores subaquáticos  DS18B20 medem continuamente a temperatura da água e o pH dos recifes, enviando dados para nossa plataforma para acompanhamento em tempo real das condições ambientais.
            </p>
            </div>

            <div>
            <p>
            <span className="font-bold text-darkslategray-200 mr-1">
            Alertas e Respostas Rápidas:   
            </span>
            O sistema é configurado para gerar alertas imediatos quando são detectadas temperaturas anômalas que possam ameaçar os recifes. Isso permite que as equipes de conservação tomem medidas preventivas rapidamente, como o aumento da vigilância ou a implementação de técnicas de mitigação
            </p>
            </div>

            <div>
            <p>
            <span className="font-bold text-darkslategray-200 mr-1">
            Oportunidades de colaboração em projetos de restauração: 
            </span>
            acesso à recursos educativos exclusivos e atualizações contínuas sobre as melhores práticas de conservação marinha.
            </p>
            </div>
            
          </div>
        </div>

      </div>
      <FormSignUp/>

    </div>
  );
};

export default Cadastro;
