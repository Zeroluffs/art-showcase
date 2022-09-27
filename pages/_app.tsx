import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavigationBar } from "../Components/Navigation/NavigationBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-slate-800 ">
      <NavigationBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
