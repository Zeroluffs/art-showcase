import Link from "next/link";
import { useRouter, NextRouter } from "next/router";


const navigationRoutes = ["Home", "About", "Contact"];

export function NavigationBar() {
  const router = useRouter();
  console.log(typeof router);
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
        <div>
          <a className="text-sm text-gray-300">d</a>
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
