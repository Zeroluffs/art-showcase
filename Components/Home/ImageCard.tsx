import Image, { StaticImageData } from "next/image";
import midNight from "../../assets/midnight.png";

const arrayImages = [midNight, midNight, midNight, midNight];
interface ImageType {
  src: string | StaticImageData;
  className?: string;
}

export function ImageCard() {
  return (
    <div className="relative grid grid-cols-3 gap-2 pl-24 mt-24 gap gap-y-16">
      {arrayImages.map((image, index) => {
        return <ImageComponent key={index} src={image} />;
      })}
    </div>
  );
}

function ImageComponent({ src }: ImageType) {
  return (
    <div className="w-[500px] h-[500px] relative">
      <Image alt="" src={src} />
      <div className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-white duration-300 bg-black opacity-0 hover:opacity-90 hover:bg-opacity-30">
        Mood
      </div>
    </div>
  );
}
