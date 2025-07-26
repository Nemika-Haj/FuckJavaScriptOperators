import { Provider } from "@/components/ui/provider";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { DarkMode } from "@/components/ui/color-mode";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <DarkMode>
      <Component {...pageProps} />
      </DarkMode>
    </Provider>
  );
}
