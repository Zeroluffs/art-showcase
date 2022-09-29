import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

const socialLinks = [faTwitter, faInstagram, faArtstation];

interface socialProps {
  icon: IconProp;
}

export function FooterComponent() {
  return (
    <footer className="pb-14 mt-14">
      <div className="flex flex-row justify-center gap-4 ">
        {React.Children.toArray(
          socialLinks.map((iconName, index) => {
            return <SocialMediaLinks key={index} icon={iconName} />;
          })
        )}
      </div>
      <p className="flex justify-center mt-8 font-thin text-gray-300 opacity-70 ">
        Art Showcase © 2022 - Americas - asgallery@gmail.com
      </p>
    </footer>
  );

  function SocialMediaLinks({ icon }: socialProps) {
    return (
      <a className="text-sm text-gray-300 ">
        <FontAwesomeIcon className="opacity-60" icon={icon} />
      </a>
    );
  }
}
