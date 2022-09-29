import Image, { StaticImageData } from "next/image";
import { useComponentVisible } from "./useComponentVisible";
import "animate.css";

interface imageModalProp {
  setIsOpen: (active: boolean) => void;
  src: string | StaticImageData;
}

export function ImageModal({ setIsOpen, src }: imageModalProp) {
  const { ref, isComponentVisible } = useComponentVisible(true);
  console.log(src);

  setIsOpen(isComponentVisible);
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-20 animate__animated animate__fadeIn"
    >
      <div className="relative w-10/12 h-5/6">
        {isComponentVisible && (
          <Image layout={"fill"} alt="" src={src} objectFit={"contain"} />
        )}
      </div>
    </div>
  );
}
