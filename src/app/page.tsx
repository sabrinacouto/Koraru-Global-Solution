import Image from "next/image";
import About from "./about/page";
import ServicesContent from "./servicecontent/page";
import Mission from "./mission/page";
import Equipe from "./equipe/page";
import Dashboard from "./dashboard/page";

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
   <section id ='equipe' className="mt-10 font-montserrat">
   <Equipe/>
   </section>
   <Dashboard />
 
   </>
  );
}
