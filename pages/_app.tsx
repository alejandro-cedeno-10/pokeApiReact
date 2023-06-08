import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react';

import {darkTheme} from "../themes";

// function App({ Component, pageProps }: AppProps) {
//   return (
//       // 2. Use at the root of your app
//       <NextUIProvider>
//         <Component {...pageProps} />
//       </NextUIProvider>
//   );
// }
//
// export default App;

export default function App({ Component, pageProps }: AppProps) {
  return(
        <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
        </NextUIProvider>
    )

}
