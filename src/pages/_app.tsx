import Layout from "../components/Layout/index";
import type { AppProps } from "next/app";
import "../theme/globalTheme.css";
import "../theme/resets.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
