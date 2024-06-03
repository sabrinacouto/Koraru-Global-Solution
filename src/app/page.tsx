import Image from "next/image";
import About from "./about/AboutUs";
import ServicesContent from "./serviços/ServicesContent";
import Mission from "./mission/Mission";

export default function Home() {
  return (
   <>
   <section id ='sobre-nos' className="mt-10 font-montserrat">
   <About/>
   </section>
   <section id ='servicos' className="mt-10 font-montserrat">
   <ServicesContent/>
   </section>
   <section id ='nossa-missao' className="mt-10 font-montserrat">
   <Mission/>
   </section>
   </>
  );
}
