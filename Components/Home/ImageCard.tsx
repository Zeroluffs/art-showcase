import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { covenEve, midNight } from "../../assets";
import { ImageModal } from "./ImageModal";

const arrayImages = [
  covenEve,
  covenEve,
  midNight,
  covenEve,
  midNight,
  midNight,
];
interface ImageType {
  src: string | StaticImageData;
  className?: string;
  openingModal: () => void;
  setImageSrc: (img: string | StaticImageData) => void;
}

export function ImageCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>("");
  function openingModal() {
    setIsOpen(true);
  }

  return (
    <div className="grid grid-cols-1 mt-24 lg:mx-20 md:grid-cols-2 lg:grid-cols-3 gap-y-16">
      {arrayImages.map((image, index) => {
        return (
          <div key={index}>
            <ImageComponent
              src={image}
              openingModal={openingModal}
              setImageSrc={setImageSrc}
            />
            {isOpen && <ImageModal src={imageSrc} setIsOpen={setIsOpen} />}
          </div>
        );
      })}
    </div>
  );
}

function ImageComponent({ src, openingModal, setImageSrc }: ImageType) {
  return (
    <div className=" w-[350px] h-[350px]  m-auto md:w-[370px] md:h-[370px] lg:w-[500px] lg:h-[500px] relative">
      <Image alt="" src={src} layout={"fill"} objectFit={"cover"} />
      <div
        onClick={() => {
          setImageSrc(src);
          openingModal();
        }}
        className="absolute inset-0 z-10 flex items-center justify-center text-white duration-300 bg-black opacity-0 hover:opacity-90 hover:bg-opacity-30"
      >
        <div className="flex flex-col">
          <p className="text-xl font-semibold">Mood</p>
          <p className="m-auto font-light">by Me</p>
        </div>
      </div>
    </div>
  );
}
