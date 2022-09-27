import Link from "next/link";

export function NavigationBar() {
  return (
    <nav className="sticky top-0 bg-slate-800 h-28">
      <div className="flex flex-row justify-between mx-4 pt-14 ">
        <ul className="flex flex-row gap-2">
          <Link href="/">
            <a>
              <li className="text-sm text-gray-300">Home</li>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <li className="text-sm text-gray-300">About</li>
            </a>
          </Link>
          <li className="text-sm text-gray-300">Projects</li>
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
