import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

const navigationRoutes = ["Home", "About", "Contact"];
const socialLinks = [faTwitter, faInstagram, faArtstation];

interface socialProps {
  icon: IconProp;
}

export function NavigationBar() {
  const router = useRouter();
  return (
    <nav className="sticky top-0 bg-slate-800 h-28">
      <div className="flex flex-row justify-between mx-4 pt-14 ">
        <ul className="flex flex-row gap-6">
          {navigationRoutes.map((singleRoute) => {
            return (
              <NavigationLink
                key={singleRoute}
                href={`/${singleRoute.toLowerCase()}`}
                text={singleRoute}
                router={router}
              />
            );
          })}
        </ul>
        <div>
          <a className="text-xl text-gray-300">Art Showcase</a>
        </div>
        <div className="flex flex-row gap-4">
          {React.Children.toArray(
            socialLinks.map((iconName, index) => {
              return <SocialMediaLinks key={index} icon={iconName} />;
            })
          )}
        </div>
      </div>
    </nav>
  );
}

function NavigationLink(props: {
  href: string;
  text: string;
  router: NextRouter;
}) {
  const isActive =
    props.router.asPath === (props.href === "/home" ? "/" : props.href);
  return (
    <Link href={props.href === "/home" ? "/" : props.href}>
      <a className="text-xl text-gray-300">
        <li className={`text-sm text-gray-300  ${isActive ? "font-bold" : ""}`}>
          {props.text}
        </li>
      </a>
    </Link>
  );
}

function SocialMediaLinks({ icon }: socialProps) {
  return (
    <a className="text-sm text-gray-300">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
