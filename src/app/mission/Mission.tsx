import Image from "next/image";
import mission from "../../../public/assets/mission.jpg";
import ocean from "../../../public/assets/ocean.gif";
import mergulho from "../../../public/assets/mergulho.jpg"

const Mission = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center gap-10 justify-center px-8 py-12">
                <div className="flex-col">
                    <h1 className="font-bold text-5xl text-darkslategray-100">
                        NOSSA MISSÃO
                    </h1>
                    <div className="w-16 border-b-4 border-lightcoral mb-7" />
                    <p className="text-base text-black w-auto lg:w-[35rem]">
                        A missão da KŌRARU é proteger e restaurar os recifes de coral,
                        fundamentais para a saúde dos oceanos e do planeta. Utilizamos
                        tecnologia de ponta para monitorar e identificar ameaças aos
                        recifes, implementando soluções inovadoras de restauração e manejo
                        ativo. Nosso compromisso é criar um futuro onde os recifes de coral
                        possam prosperar, garantindo a biodiversidade e a resiliência dos
                        oceanos para as gerações futuras.
                    </p>
                </div>
                <Image src={mission} alt="Tubarões ao lado de corais" className="rounded-31xl w-[30rem] h-[16rem]" />
            </div>

    <div className="bg-[#FCFCFC] font-montserrat py-5 container max-w-full max-h-full">
    <div className="flex flex-col md:flex-row items-start justify-center py-0 pr-5 pl-6">
        <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-center text-7xl text-darkslategray-100">
                Por que a nossa missão é tão importante?
            </h2>
            <div className="w-16 border-b-4 border-lightcoral mb-7" />
        </div>
    </div>

    <div className="flex flex-col lg:flex-row items-start justify-center gap-[5rem] text-darkslategray-100  py-6">
        <div className="flex flex-col items-start justify-center gap-4">
            <h1 className="font-bold text-7xl">
                Saúde dos corais
            </h1>
            <h3 className=" text-5xl font-bold text-lightcoral">
                O que prejudica a saúde dos corais?
            </h3>
            <ul className="list-disc pl-5 w-auto lg:w-[35rem]">
                <li className="mb-3">Aumento da temperatura da água dos oceanos causa o branqueamento dos corais, tornando-os mais vulneráveis a doenças.</li>
                <li className="mb-3">Resíduos plásticos, esgoto e produtos químicos também prejudicam a qualidade da água, afetando a saúde dos corais e a biodiversidade marinha.</li>
                <li className="mb-3">Práticas de pesca insustentáveis danificam os recifes de coral e reduzem as populações de espécies marinhas que dependem desses habitats. Proteger os corais das práticas de pesca predatória é essencial para a sustentabilidade das populações de peixes e a segurança alimentar humana.</li>
            </ul>
        </div>
        <div className="relative w-auto max-w-lg h-auto">
       <div className="relative w-full">
        <Image
            className="w-auto h-auto rounded-31xl "
            loading="lazy"
            alt=""
            src={ocean}       
        /> 
    </div>

</div>
</div>

<div className=" flex flex-col-reverse md:flex-row justify-center items-center p-1 md:p-[3rem] gap-10">
  <div className="">
  <Image src = {mergulho} alt = "Mergulhadora em um oceano repleto de corais" className="w-[35rem] h-auto rounded-31xl"/>
  </div>
  <div className="w-[20rem] md:w-[40rem]">
    <h2 className="font-bold text-7xl text-darkslategray-200">
    A importância dos Corais
    </h2>
    <h3 className=" text-5xl font-bold text-lightcoral">
    Por que corais são tão importantes? 
    </h3>
    
  
  <p className=" text-base mb-4">
  Os corais são vitais para a biodiversidade marinha, abrigando aproximadamente 25% de todas as espécies marinhas e fornecendo habitat e áreas de reprodução para uma vasta gama de organismos. Eles protegem as costas contra a erosão e tempestades, atuando como barreiras naturais que absorvem a energia das ondas. Economicamente, os recifes de coral sustentam as indústrias do turismo e da pesca, sendo fontes importantes de sustento para muitas comunidades costeiras. Além disso, corais são fontes de novos compostos químicos usados em medicamentos para tratar diversas doenças. Eles também desempenham um papel crucial na ciclagem de nutrientes no oceano, essencial para a sobrevivência de muitos organismos marinhos. Recifes de coral são importantes laboratórios naturais para a pesquisa científica e a educação ambiental, ajudando a sensibilizar o público sobre a importância da conservação marinha.
</p>
<p className=" font-bold text-lightcoral">
Manter a saúde dos recifes de coral é fundamental para preservar esses benefícios ecológicos, econômicos e culturais.</p>
</div>
</div>
</div>
</>
    );
}

export default Mission;


