'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import fish5 from "../../../public/assets/fish5.png";
import fish2 from "../../../public/assets/fish2.png";
import fish4 from "../../../public/assets/fish4.png";
import fish1 from "../../../public/assets/fish1.png";
import waves from "../../../public/assets/waves.png";

const Features = () => {
  const fish5Ref = useRef<HTMLImageElement>(null);
  const fish1Ref = useRef<HTMLImageElement>(null);
  const fish4Ref = useRef<HTMLImageElement>(null);
  const fish2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const moveFishLeft = (element: HTMLImageElement | null, startPosition: number) => {
      let position = startPosition;
      const move = () => {
        if (element) {
          position -= 1; // Aumentando a velocidade
          if (position <= -200) {
            position = 909;
          }
          element.style.left = position + "px";
          requestAnimationFrame(move);
        }
      };
      move();
    };

    const moveFishRight = (element: HTMLImageElement | null, startPosition: number) => {
      let position = startPosition;
      const move = () => {
        if (element) {
          position += 1; // Aumentando a velocidade
          if (position >= 1200) {
            position = 152;
          }
          element.style.left = position + "px";
          requestAnimationFrame(move);
        }
      };
      move();
    };

    moveFishLeft(fish5Ref.current, 909);
    moveFishLeft(fish1Ref.current, 1090); // Posição inicial ajustada para mais abaixo
    moveFishRight(fish4Ref.current, 44);   // Posição inicial ajustada para mais abaixo
    moveFishRight(fish2Ref.current, 152);
  }, []);

  return (
    <div className="h-72 w-full relative overflow-hidden">
      <div className="h-full w-full relative overflow-hidden">
        <div ref={fish5Ref} className="fish absolute top-0 left-0">
          <Image
            className="w-32 h-auto"
            loading="lazy"
            alt=""
            src={fish5}
          />
        </div>
        <div ref={fish2Ref} className="fish absolute top-0 left-0">
          <Image
            className="w-40 h-auto"
            loading="lazy"
            alt=""
            src={fish2}
          />
        </div>
        <div ref={fish4Ref} className="fish absolute top-20 left-0">
          <Image
            className="w-32 h-auto"
            loading="lazy"
            alt=""
            src={fish4}
          />
        </div>
        <div ref={fish1Ref} className="fish absolute top-20 left-0">
          <Image
            className="w-40 h-auto"
            loading="lazy"
            alt=""
            src={fish1}
          />
        </div>
        <Image
          className="absolute bottom-0 left-0 w-full h-[19rem] object-cover z-1"
          alt=""
          src={waves}
        />
      </div>
    </div>
  );
};

export default Features;
