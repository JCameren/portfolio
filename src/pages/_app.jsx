import Layout from "../components/Layout/index";
import { darkTheme } from "../styles/theme.css";
import "../styles/resets.css";

const App = ({ Component, pageProps }) => {
  return (
    <main className={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default App