import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { store, persistor } from "../store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Layout>
          <Navbar />
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
