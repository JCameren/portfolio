import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout/index";
import { darkTheme } from "../styles/theme.css";
import "../styles/resets.css";

// thx to this source for helping me figure this out: https://blog.logrocket.com/advanced-page-transitions-next-js-framer-motion/

const App = ({ Component, pageProps, router }) => {
  return (
    <main className={darkTheme}>
      <Layout>
        <AnimatePresence mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </main>
  );
};

export default App
