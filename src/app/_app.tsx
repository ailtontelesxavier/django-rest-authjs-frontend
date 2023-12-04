import type {AppProps} from "next/app";
import {SessionProvider} from "next-auth/react";

import { ThemeProvider } from "@material-tailwind/react";

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <SessionProvider session={session}>
        <ThemeProvider>
        <Component {...pageProps} />
        </ThemeProvider>
    </SessionProvider>
  );
}