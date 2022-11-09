import '../styles/global.css'; // グローバルCSSは_app.jsでしかインポートできない！

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
