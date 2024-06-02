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
          position -= 0.5; // Adjust speed as needed
          if (position <= -200) { // Reset when fish goes out of sight
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
          position += 0.5; // Adjust speed as needed
          if (position >= 1200) { // Reset when fish goes out of sight
            position = 152;
          }
          element.style.left = position + "px";
          requestAnimationFrame(move);
        }
      };
      move();
    };

    moveFishLeft(fish5Ref.current, 909);
    moveFishLeft(fish1Ref.current, 1090);
    moveFishRight(fish4Ref.current, 44);
    moveFishRight(fish2Ref.current, 152);
  }, []);

  return (
    <div className="h-72 w-screen relative overflow-hidden">
      <Image
        ref={fish5Ref}
        className="fish absolute top-[0px] left-[909px] w-[181px] h-[115px] object-cover"
        loading="lazy"
        alt=""
        src={fish5}
      />
      <Image
        ref={fish2Ref}
        className="fish absolute top-[21px] left-[152px] w-[188px] h-[94px] object-contain"
        loading="lazy"
        alt=""
        src={fish2}
      />
      <Image
        ref={fish4Ref}
        className="fish absolute top-[147px] left-[44px] w-32 h-[71px] object-contain"
        loading="lazy"
        alt=""
        src={fish4}
      />
      <Image
        ref={fish1Ref}
        className="fish absolute top-[74px] left-[1090px] w-[156px] h-[5rem] mt-5 object-cover"
        loading="lazy"
        alt=""
        src={fish1}
      />
      <Image
        className="absolute top-[6px]  w-full h-[19rem] object-cover z-[1]"
        alt=""
        src={waves}
      />
    </div>
  );
};

export default Features;









