import { useState } from "react";
import Layout from "../components/Layout/index";
import "../styles/resets.css";
import { lightTheme, darkTheme } from "../styles/theme.css";

export default function App({ Component, pageProps }) {
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <main className={isLightTheme ? lightTheme : darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
