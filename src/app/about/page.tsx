import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import aboutUs from "../../../public/assets/aboutUs.jpg";
import Features from "@/components/Features/Features";
const About: React.FC = () => {
  return (
    <>
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-6 pr-5 pl-6 box-border max-w-full text-left text-[2.25rem] font-montserrat">
      <div className="flex flex-col items-start justify-start gap-[2.0625rem] max-w-full mq750:gap-[1rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="w-[9.375rem] flex flex-row items-start justify-start relative">
            <h1 className="flex-1 relative font-bold mq450:text-[1.375rem] mq750:text-[1.8125rem] text-darkslategray-200">
              ŌRARU
            </h1>
                <Image
                className="h-[4rem] w-[4rem] absolute !m-[0] top-[-9px] left-[-53px] object-cover z-[1]"
                alt="Logo da Koraru"
                src={logo}
              />
          </div>
        </div>
        <h1 className="m-0 relative text-13xl font-semibold text-darkslategray-200 mq450:text-lg mq750:text-[7rem]">
          Tecnologia avançada para preservar e restaurar a vida nos oceanos
        </h1>
      </div>
    </div>
    <div className="mt-[6rem]">
    <Features/>
    </div>

<div className=" flex flex-col md:flex-row justify-center items-center p-1 md:p-[3rem] gap-10">
  <div>
  <Image src = {aboutUs} alt = "Mergulhadora em um oceano repleto de corais" className="w-[30rem] h-auto rounded-31xl"/>
  </div>
  <div className="w-[20rem] md:w-[40rem] ">
    <h2 className="font-bold text-7xl text-darkslategray-200">
      SOBRE NÓS
    </h2>
    <div className=" w-[4rem] border-b-4 border-lightcoral mb-7"/>
    
  
  <p className=" text-base text-black mb-4">
                O KŌRARU está comprometida em proteger e restaurar os recifes de
                coral, essenciais para a saúde dos oceanos e da vida marinha.
                Utilizamos tecnologia de ponta, como sensores subaquáticos e
                dispositivos IoT, para monitorar continuamente a saúde dos
                recifes, identificar ameaças e implementar soluções inovadoras
                de restauração, incluindo corais artificiais impressos em 3D.
                Além de nosso foco em pesquisa e desenvolvimento, promovemos a
                conscientização pública e a educação sobre a importância dos
                recifes de coral, incentivando práticas sustentáveis para
                assegurar um futuro saudável para nossos oceanos. Nossa missão é
                combinar ciência, tecnologia e comunidade para garantir a
                resiliência dos ecossistemas marinhos e a sustentabilidade do
                planeta.
              </p>
              <button className="cursor-pointer [border:none] py-1.5 px-4 bg-darkslategray-200 w-[134px] rounded-61xl flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-slategray-100">
              <div className="h-8 w-[134px] relative rounded-61xl bg-darkslategray-200 hidden" />
              <div className="relative text-base font-medium font-montserrat text-white text-left inline-block min-w-[88px] z-[1]">
                Saiba mais
              </div>
            </button>
  </div>
</div>
    </>
  );
};

export default About;

