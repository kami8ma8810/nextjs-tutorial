import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css'; // グローバルCSSは_app.jsでしかインポートできない！

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
