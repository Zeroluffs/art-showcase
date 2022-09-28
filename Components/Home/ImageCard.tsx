import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import midNight from "../../assets/midnight.png";
import { ImageModal } from "./ImageModal";

const arrayImages = [midNight, midNight, midNight, midNight];
interface ImageType {
  src: string | StaticImageData;
  className?: string;
  openingModal: () => void;
}

export function ImageCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  function openingModal() {
    setIsOpen(true);
  }

  return (
    <div className="grid grid-cols-3 gap-2 pl-24 mt-24 gap gap-y-16">
      {arrayImages.map((image, index) => {
        return (
          <div key={index}>
            <ImageComponent src={image} openingModal={openingModal} />
            {isOpen && <ImageModal src={image} setIsOpen={setIsOpen} />}
          </div>
        );
      })}
    </div>
  );
}

function ImageComponent({ src, openingModal }: ImageType) {
  return (
    <div className="w-[500px] h-[500px] relative">
      <Image alt="" src={src} />
      <div
        onClick={() => {
          openingModal();
        }}
        className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white duration-300 bg-black opacity-0 hover:opacity-90 hover:bg-opacity-30"
      >
        Mood
      </div>
    </div>
  );
}
