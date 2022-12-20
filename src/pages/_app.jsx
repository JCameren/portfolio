import { useState, useEffect, use } from "react";
import Layout from "../components/Layout/index";
import "../styles/resets.css";
import { lightTheme, darkTheme } from "../styles/theme.css";

export default function App({ Component, pageProps }) {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const themeToggle = () => {
    setIsLightTheme(prevTheme => !prevTheme)
  }
  // useEffect(() => {
  //   if (!isLightTheme) {
  //     localStorage.setItem('darkmode', darkTheme)
  //     setIsLightTheme()
  //   } else {
  //     localStorage.removeItem('darkmode')
  //   }
  // }, [isLightTheme])

  return (
    <main className={isLightTheme ? lightTheme : darkTheme}>
      <Layout themeToggle={themeToggle}>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
