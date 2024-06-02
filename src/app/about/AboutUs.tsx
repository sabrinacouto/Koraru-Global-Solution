import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Features from "@/components/Features/Features";
const About: React.FC = () => {
  return (
    <>
    <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-6 pr-5 pl-6 box-border max-w-full text-left text-[2.25rem] text-darkslategray-200 font-montserrat">
      <div className="flex flex-col items-start justify-start gap-[2.0625rem] max-w-full mq750:gap-[1rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="w-[9.375rem] flex flex-row items-start justify-start relative">
            <b className="flex-1 relative font-bold mq450:text-[1.375rem] mq750:text-[1.8125rem]">
              ŌRARU
            </b>
                <Image
                className="h-[5rem] w-[5rem] absolute !m-[0] top-[-23px] left-[-53px] object-cover z-[1]"
                alt="Logo da Koraru"
                src={logo}
              />
          </div>
        </div>
        <h1 className="m-0 relative text-13xl font-semibold font-inherit mq450:text-lg mq750:text-[7rem]">
          Tecnologia avançada para preservar e restaurar a vida nos oceanos
        </h1>
      </div>
    </div>

    <div className="mt-[6rem]">
    <Features/>
    </div>
    </>
  );
};

export default About;

