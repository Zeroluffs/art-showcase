export function ContactComponent() {
  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <p className="mb-4 text-lg text-gray-300">Contact</p>
      <p className="mb-4 font-light text-gray-300">
        Feel free to email us at asgallery@gmail.com or use the contact form
        below.
      </p>

      <form className="flex flex-col">
        <div>
          <label htmlFor="name" className="text-base text-gray-300 ">
            Name *
          </label>
          <input
            required
            className="block h-8 p-2 my-8 rounded-md w-72 bg-slate-300"
            id="name"
            type="text"
          ></input>
        </div>
        <div>
          <label htmlFor="name" className="text-base text-gray-300">
            Email Address *
          </label>
          <input
            required
            className="block h-8 p-2 my-8 rounded-md w-72 bg-slate-300"
            id="name"
            type="email"
          ></input>
        </div>
        <div>
          <label htmlFor="name" className="text-base text-gray-300">
            Message *
          </label>
          <textarea
            required
            className="block h-24 p-2 my-8 transition ease-in-out border border-gray-300 border-solid rounded-md bg-slate-300 w-80 focus:text-gray-700 focus:bg-slate-200 focus:border-slate-900 focus:outline-none"
            id="name"
          ></textarea>
        </div>

        <button className="w-20 h-8 mt-4 mr-64 text-sm transition-colors duration-200 transform rounded-md bg-slate-300 hover:bg-slate-400 focus:bg-slate-400">
          Send
        </button>
      </form>
    </div>
  );
}
