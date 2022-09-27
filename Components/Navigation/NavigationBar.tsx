export function NavigationBar() {
  return (
    <nav className=" sticky top-0   bg-slate-800 h-28">
      <div className="flex flex-row justify-between pt-14 mx-4 ">
        <ul className="flex flex-row gap-2">
          <li className="text-sm text-gray-300">Home</li>
          <li className="text-sm text-gray-300">About</li>
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
