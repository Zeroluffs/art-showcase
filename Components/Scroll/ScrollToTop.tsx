import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classNames } from "../index";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-6">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          " hover:bg-slate-500  inline-flex items-center rounded-full p-3 text-slate-300 shadow-sm transition-opacity "
        )}
      >
        <FontAwesomeIcon icon={faArrowCircleUp} size="4x" />
      </button>
    </div>
  );
}
