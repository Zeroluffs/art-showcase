import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavigationBar } from "../Components/Navigation/NavigationBar";
import "animate.css";
import { Transition } from "../Components/Transition/Transition";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <div className="min-h-screen bg-slate-800 ">
      <Transition key={asPath}>
        <Component {...pageProps} />
      </Transition>
    </div>
  );
}

export default MyApp;
